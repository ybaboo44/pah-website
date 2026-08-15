"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import type { ReactNode } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Building2,
  ChevronRight,
  FolderKanban,
  LocateFixed,
  Map as MapIcon,
  MapPin,
  Users,
} from "lucide-react"

import type {
  Feature,
  FeatureCollection,
  Geometry,
} from "geojson"

import "leaflet/dist/leaflet.css"

/* =========================================================
   LEAFLET — CLIENT ONLY
========================================================= */

const MapContainer = dynamic(
  () =>
    import("react-leaflet").then(
      (module) => module.MapContainer
    ),
  {
    ssr: false,
  }
)

const TileLayer = dynamic(
  () =>
    import("react-leaflet").then(
      (module) => module.TileLayer
    ),
  {
    ssr: false,
  }
)

const GeoJSON = dynamic(
  () =>
    import("react-leaflet").then(
      (module) => module.GeoJSON
    ),
  {
    ssr: false,
  }
)

/* =========================================================
   TYPES
========================================================= */

interface Department {
  id: string
  name: string
  members: number
  projects: number
  communities: number
}

type DepartmentFeature =
  Feature<Geometry> & {
    properties?: Record<string, unknown>
  }

type HaitiGeoJSON =
  FeatureCollection<
    Geometry,
    Record<string, unknown>
  >

/* =========================================================
   DONNÉES MÉTIER
   La géographie vient du GeoJSON.
   Ces données peuvent ensuite venir de ton API.
========================================================= */

const departments: Department[] = [
  {
    id: "artibonite",
    name: "Artibonite",
    members: 15800,
    projects: 13,
    communities: 35,
  },
  {
    id: "centre",
    name: "Centre",
    members: 8400,
    projects: 8,
    communities: 22,
  },
  {
    id: "grand-anse",
    name: "Grand'Anse",
    members: 6100,
    projects: 6,
    communities: 16,
  },
  {
    id: "nippes",
    name: "Nippes",
    members: 5400,
    projects: 5,
    communities: 14,
  },
  {
    id: "nord",
    name: "Nord",
    members: 12300,
    projects: 11,
    communities: 28,
  },
  {
    id: "nord-est",
    name: "Nord-Est",
    members: 7600,
    projects: 7,
    communities: 19,
  },
  {
    id: "nord-ouest",
    name: "Nord-Ouest",
    members: 6900,
    projects: 8,
    communities: 21,
  },
  {
    id: "ouest",
    name: "Ouest",
    members: 24500,
    projects: 18,
    communities: 42,
  },
  {
    id: "sud",
    name: "Sud",
    members: 10100,
    projects: 10,
    communities: 26,
  },
  {
    id: "sud-est",
    name: "Sud-Est",
    members: 7300,
    projects: 7,
    communities: 18,
  },
]

/* =========================================================
   CENTRE INITIAL D'HAÏTI
========================================================= */

const HAITI_CENTER: [number, number] = [
  18.9712,
  -72.2852,
]

/* =========================================================
   NORMALISATION
========================================================= */

function normalizeDepartmentName(
  value: string
) {
  const name = value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ")

  const aliases: Record<string, string> = {
    artibonite: "Artibonite",
    "l'artibonite": "Artibonite",

    centre: "Centre",

    "grand'anse": "Grand'Anse",
    "grand anse": "Grand'Anse",

    nippes: "Nippes",

    nord: "Nord",

    "nord-est": "Nord-Est",
    "nord est": "Nord-Est",

    "nord-ouest": "Nord-Ouest",
    "nord ouest": "Nord-Ouest",

    ouest: "Ouest",

    sud: "Sud",

    "sud-est": "Sud-Est",
    "sud est": "Sud-Est",
  }

  return aliases[name] ?? value
}

/* =========================================================
   EXTRACTION DU NOM DU GEOJSON
========================================================= */

function getFeatureDepartmentName(
  feature?: DepartmentFeature
) {
  if (!feature?.properties) {
    return ""
  }

  const properties = feature.properties

  const possibleNames = [
    properties.name,
    properties.NAME_1,
    properties.NAME,
    properties.NAME_EN,
    properties.name_1,
    properties.department,
    properties.DEPARTMENT,
    properties.nom,
    properties.NOM,
  ]

  const found = possibleNames.find(
    (value) =>
      typeof value === "string" &&
      value.trim().length > 0
  )

  return found
    ? normalizeDepartmentName(String(found))
    : ""
}

/* =========================================================
   CARTE INTERACTIVE
========================================================= */

function InteractiveHaitiMap({
  geoData,
  selectedDepartment,
  onDepartmentSelect,
  onMapReady,
}: {
  geoData: HaitiGeoJSON
  selectedDepartment: string
  onDepartmentSelect: (
    name: string
  ) => void
  onMapReady?: (
    map: any
  ) => void
}) {
  const geoJsonRef = useRef<any>(null)

  /**
   * On importe useMap ici dynamiquement.
   * Le composant étant rendu uniquement côté client,
   * Leaflet peut être utilisé normalement.
   */
  const [MapController, setMapController] =
    useState<any>(null)

  useEffect(() => {
    let mounted = true

    import("react-leaflet").then(
      ({ useMap }) => {
        if (!mounted) return

        const Controller = ({
          selectedDepartment,
        }: {
          selectedDepartment: string
        }) => {
          const map = useMap()

          useEffect(() => {
            onMapReady?.(map)
          }, [map])

          /**
           * Quand un département est sélectionné
           * depuis la liste, on recherche sa vraie
           * géométrie dans le GeoJSON.
           */
          useEffect(() => {
            if (!selectedDepartment) return

            const layers =
              geoJsonRef.current?.getLayers?.()

            if (!layers?.length) return

            const targetLayer = layers.find(
              (layer: any) => {
                const name =
                  getFeatureDepartmentName(
                    layer.feature
                  )

                return (
                  name.toLowerCase() ===
                  selectedDepartment.toLowerCase()
                )
              }
            )

            if (!targetLayer) return

            const bounds =
              targetLayer.getBounds?.()

            if (!bounds?.isValid?.()) return

            map.fitBounds(bounds, {
              paddingTopLeft: [40, 40],
              paddingBottomRight: [40, 40],
              maxZoom: 9,
              duration: 0.9,
              animate: true,
            })
          }, [
            map,
            selectedDepartment,
          ])

          return null
        }

        if (mounted) {
          setMapController(
            () => Controller
          )
        }
      }
    )

    return () => {
      mounted = false
    }
  }, [onMapReady])

  const styleFeature = (
    feature?: DepartmentFeature
  ) => {
    const name =
      getFeatureDepartmentName(feature)

    const active =
      name.toLowerCase() ===
      selectedDepartment.toLowerCase()

    return {
      fillColor: active
        ? "#1E7D32"
        : "#E4EEE5",

      fillOpacity: active
        ? 0.92
        : 0.78,

      color: active
        ? "#145A32"
        : "#FFFFFF",

      weight: active
        ? 2.5
        : 1.2,

      opacity: 1,
    }
  }

  const handleEachFeature = (
    feature: DepartmentFeature,
    layer: any
  ) => {
    const name =
      getFeatureDepartmentName(feature)

    if (!name) return

    const department =
      departments.find(
        (item) =>
          item.name.toLowerCase() ===
          name.toLowerCase()
      )

    /* -----------------------------------------
       TOOLTIP
    ----------------------------------------- */

    layer.bindTooltip(name, {
      sticky: true,
      direction: "center",
      className:
        "pah-department-tooltip",
    })

    /* -----------------------------------------
       POPUP
    ----------------------------------------- */

    layer.bindPopup(
      `
        <div class="pah-popup">
          <div class="pah-popup-label">
            DÉPARTEMENT
          </div>

          <div class="pah-popup-title">
            ${name}
          </div>

          ${
            department
              ? `
                <div class="pah-popup-stat">
                  <span>Membres</span>
                  <strong>
                    ${department.members.toLocaleString(
                      "fr-FR"
                    )}
                  </strong>
                </div>

                <div class="pah-popup-stat">
                  <span>Projets</span>
                  <strong>
                    ${department.projects}
                  </strong>
                </div>
              `
              : ""
          }
        </div>
      `,
      {
        closeButton: true,
        className:
          "pah-department-popup",
      }
    )

    /* -----------------------------------------
       INTERACTIONS
    ----------------------------------------- */

    layer.on({
      mouseover: () => {
        layer.setStyle({
          fillColor: "#1E7D32",
          fillOpacity: 0.96,
          color: "#145A32",
          weight: 2.5,
        })

        layer.bringToFront?.()
      },

      mouseout: () => {
        layer.setStyle(
          styleFeature(feature)
        )
      },

      click: () => {
        const bounds =
          layer.getBounds?.()

        if (bounds?.isValid?.()) {
          const map =
            layer._map

          map?.fitBounds(
            bounds,
            {
              paddingTopLeft: [45, 45],
              paddingBottomRight: [45, 45],
              maxZoom: 9,
              duration: 0.9,
              animate: true,
            }
          )
        }

        onDepartmentSelect(name)

        layer.openPopup?.()
      },
    })
  }

  return (
    <MapContainer
      center={HAITI_CENTER}
      zoom={7}
      minZoom={6}
      maxZoom={11}
      scrollWheelZoom={true}
      doubleClickZoom={true}
      dragging={true}
      zoomControl={true}
      attributionControl={true}
      className="h-full min-h-[560px] w-full"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors &copy; CARTO"
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      {MapController && (
        <MapController
          selectedDepartment={
            selectedDepartment
          }
        />
      )}

      <GeoJSON
        ref={geoJsonRef}
        data={geoData}
        style={styleFeature}
        onEachFeature={
          handleEachFeature
        }
      />
    </MapContainer>
  )
}

/* =========================================================
   COMPOSANT PRINCIPAL
========================================================= */

export function MapSection() {
  const [geoData, setGeoData] =
    useState<HaitiGeoJSON | null>(null)

  const [selectedDepartment, setSelectedDepartment] =
    useState("Ouest")

  const [loading, setLoading] =
    useState(true)

  const [error, setError] =
    useState(false)

  const [mapInstance, setMapInstance] =
    useState<any>(null)

  /* =======================================================
     CHARGEMENT GEOJSON
  ======================================================= */

  useEffect(() => {
    let mounted = true

    setLoading(true)

    fetch(
      "/maps/haiti-departments.geojson",
      {
        cache: "force-cache",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `HTTP ${response.status}`
          )
        }

        return response.json()
      })
      .then((data: HaitiGeoJSON) => {
        if (!mounted) return

        if (
          data?.type !==
          "FeatureCollection"
        ) {
          throw new Error(
            "GeoJSON invalide"
          )
        }

        setGeoData(data)
        setError(false)
      })
      .catch((err) => {
        console.error(
          "Impossible de charger le GeoJSON :",
          err
        )

        if (mounted) {
          setError(true)
        }
      })
      .finally(() => {
        if (mounted) {
          setLoading(false)
        }
      })

    return () => {
      mounted = false
    }
  }, [])

  /* =======================================================
     STATISTIQUES
  ======================================================= */

  const statistics = useMemo(() => {
    return {
      members: departments.reduce(
        (sum, item) =>
          sum + item.members,
        0
      ),

      projects: departments.reduce(
        (sum, item) =>
          sum + item.projects,
        0
      ),

      communities:
        departments.reduce(
          (sum, item) =>
            sum + item.communities,
          0
        ),
    }
  }, [])

  /* =======================================================
     DEPARTEMENT ACTIF
  ======================================================= */

  const activeDepartment =
    useMemo(() => {
      return (
        departments.find(
          (item) =>
            item.name ===
            selectedDepartment
        ) ?? departments[7]
      )
    }, [selectedDepartment])

  /* =======================================================
     RETOUR VUE GLOBALE
  ======================================================= */

  const resetMap = () => {
    if (!mapInstance) return

    mapInstance.setView(
      HAITI_CENTER,
      7,
      {
        animate: true,
        duration: 0.8,
      }
    )

    setSelectedDepartment("")
  }

  /* =======================================================
     RENDU
  ======================================================= */

  return (
    <section className="bg-[#f7f8f7] py-24 dark:bg-gray-950 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* =================================================
            INTRODUCTION
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.55,
          }}
          className="mb-10"
        >
          <div className="flex flex-col gap-8 border-b border-gray-200 pb-10 dark:border-gray-800 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-3xl">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-pah-green" />

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-pah-green">
                  Présence nationale
                </span>
              </div>

              <h2 className="text-3xl font-semibold tracking-[-0.035em] text-gray-950 md:text-5xl dark:text-white">
                Une présence au cœur
                des territoires
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-gray-600 dark:text-gray-400">
                Explorez notre présence dans
                les dix départements d'Haïti.
                Sélectionnez un territoire sur
                la carte pour accéder directement
                à sa zone géographique et
                découvrir les données associées.
              </p>

            </div>

            <div className="flex shrink-0 items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center border border-gray-200 bg-white text-pah-green dark:border-gray-800 dark:bg-gray-900">
                <MapIcon size={18} />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  10 départements
                </p>

                <p className="text-xs text-gray-500">
                  Haïti
                </p>
              </div>

            </div>

          </div>
        </motion.div>

        {/* =================================================
            KPI
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.45,
          }}
          className="mb-5 grid grid-cols-2 border border-gray-200 bg-white md:grid-cols-4 dark:border-gray-800 dark:bg-gray-950"
        >

          <Kpi
            value="10"
            label="Départements"
          />

          <Kpi
            value={statistics.members.toLocaleString(
              "fr-FR"
            )}
            label="Membres"
          />

          <Kpi
            value={statistics.projects.toLocaleString(
              "fr-FR"
            )}
            label="Projets"
          />

          <Kpi
            value={statistics.communities.toLocaleString(
              "fr-FR"
            )}
            label="Communautés"
          />

        </motion.div>

        {/* =================================================
            APPLICATION CARTE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
          }}
          className="overflow-hidden border border-gray-200 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.04)] dark:border-gray-800 dark:bg-gray-950"
        >

          <div className="grid lg:grid-cols-[minmax(0,1fr)_350px]">

            {/* =================================================
                CARTE
            ================================================= */}

            <div className="relative min-h-[560px] bg-[#eef2ee]">

              {/* TOP BAR */}

              <div className="absolute left-5 right-5 top-5 z-[500] flex items-center justify-between gap-4">

                <div className="flex items-center gap-2 border border-gray-200 bg-white/95 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-600 shadow-sm backdrop-blur dark:border-gray-700 dark:bg-gray-950/95 dark:text-gray-300">

                  <span className="h-1.5 w-1.5 rounded-full bg-pah-green" />

                  Carte interactive

                </div>

                <button
                  type="button"
                  onClick={resetMap}
                  className="flex items-center gap-2 border border-gray-200 bg-white/95 px-3 py-2 text-xs font-medium text-gray-700 shadow-sm backdrop-blur transition hover:border-pah-green hover:text-pah-green dark:border-gray-700 dark:bg-gray-950/95 dark:text-gray-300"
                >
                  <LocateFixed
                    size={14}
                  />

                  Vue générale
                </button>

              </div>

              {/* LOADING */}

              {loading && (
                <div className="absolute inset-0 z-[600] flex items-center justify-center bg-[#eef2ee] dark:bg-gray-900">

                  <div className="text-center">

                    <div className="mx-auto mb-4 h-7 w-7 animate-spin rounded-full border-2 border-gray-300 border-t-pah-green" />

                    <p className="text-xs font-medium text-gray-500">
                      Chargement de la carte…
                    </p>

                  </div>

                </div>
              )}

              {/* ERROR */}

              {error && !loading && (
                <div className="absolute inset-0 z-[600] flex items-center justify-center bg-gray-50 p-6 dark:bg-gray-900">

                  <div className="max-w-sm text-center">

                    <MapIcon
                      size={30}
                      className="mx-auto mb-4 text-gray-400"
                    />

                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Impossible de charger
                      la carte
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      Vérifie que le fichier
                      <strong>
                        {" "}
                        haiti-departments.geojson
                      </strong>
                      est présent dans :
                    </p>

                    <code className="mt-3 block text-xs text-gray-600 dark:text-gray-400">
                      public/maps/
                    </code>

                  </div>

                </div>
              )}

              {/* CARTE */}

              {geoData && !loading && !error && (
                <InteractiveHaitiMap
                  geoData={geoData}
                  selectedDepartment={
                    selectedDepartment
                  }
                  onDepartmentSelect={
                    setSelectedDepartment
                  }
                  onMapReady={
                    setMapInstance
                  }
                />
              )}

            </div>

            {/* =================================================
                PANNEAU DROIT
            ================================================= */}

            <aside className="border-t border-gray-200 bg-white lg:border-l lg:border-t-0 dark:border-gray-800 dark:bg-gray-950">

              {/* DEPARTEMENT ACTIF */}

              <div className="border-b border-gray-200 px-6 py-7 dark:border-gray-800">

                <div className="mb-3 flex items-center justify-between">

                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-gray-400">
                    Territoire sélectionné
                  </span>

                  <MapPin
                    size={16}
                    className="text-pah-green"
                  />

                </div>

                {selectedDepartment ? (
                  <>
                    <h3 className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-white">
                      {
                        activeDepartment.name
                      }
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-gray-500">
                      Cliquez sur un autre
                      département pour
                      déplacer automatiquement
                      la carte.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-white">
                      Haïti
                    </h3>

                    <p className="mt-2 text-xs text-gray-500">
                      Vue générale des
                      départements.
                    </p>
                  </>
                )}

              </div>

              {/* METRICS */}

              {selectedDepartment && (
                <div className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-800">

                  <Metric
                    icon={
                      <Users size={16} />
                    }
                    value={activeDepartment.members.toLocaleString(
                      "fr-FR"
                    )}
                    label="Membres"
                  />

                  <Metric
                    icon={
                      <FolderKanban
                        size={16}
                      />
                    }
                    value={String(
                      activeDepartment.projects
                    )}
                    label="Projets"
                  />

                </div>
              )}

              {/* COMMUNITY */}

              {selectedDepartment && (
                <div className="border-b border-gray-200 p-6 dark:border-gray-800">

                  <div className="flex items-start gap-3">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-pah-green/10 text-pah-green">
                      <Building2
                        size={16}
                      />
                    </div>

                    <div>

                      <p className="text-lg font-semibold text-gray-950 dark:text-white">
                        {activeDepartment.communities.toLocaleString(
                          "fr-FR"
                        )}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Communautés accompagnées
                      </p>

                    </div>

                  </div>

                </div>
              )}

              {/* LISTE */}

              <div className="p-5">

                <div className="mb-3 flex items-center justify-between px-1">

                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-gray-400">
                    Explorer les départements
                  </span>

                  <span className="text-[10px] text-gray-400">
                    10
                  </span>

                </div>

                <div className="max-h-[360px] space-y-1 overflow-y-auto pr-1">

                  {departments.map(
                    (department) => {
                      const active =
                        department.name ===
                        selectedDepartment

                      return (
                        <button
                          key={
                            department.id
                          }
                          type="button"
                          onClick={() =>
                            setSelectedDepartment(
                              department.name
                            )
                          }
                          className={`group flex w-full items-center justify-between px-3 py-3 text-left transition-all ${
                            active
                              ? "bg-pah-green text-white"
                              : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-900"
                          }`}
                        >

                          <div className="flex items-center gap-3">

                            <span
                              className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                                active
                                  ? "bg-white"
                                  : "bg-pah-green"
                              }`}
                            />

                            <div>

                              <p className="text-sm font-medium">
                                {
                                  department.name
                                }
                              </p>

                              <p
                                className={`mt-0.5 text-[10px] ${
                                  active
                                    ? "text-white/70"
                                    : "text-gray-400"
                                }`}
                              >
                                {department.members.toLocaleString(
                                  "fr-FR"
                                )}{" "}
                                membres
                              </p>

                            </div>

                          </div>

                          <ChevronRight
                            size={15}
                            className={`transition-transform ${
                              active
                                ? "translate-x-0 opacity-100"
                                : "opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                            }`}
                          />

                        </button>
                      )
                    }
                  )}

                </div>

              </div>

            </aside>

          </div>

        </motion.div>

        {/* =================================================
            INDICATION
        ================================================= */}

        <div className="mt-4 flex items-center justify-between text-[10px] text-gray-400">

          <span>
            Données cartographiques :
            limites administratives
            des départements d'Haïti
          </span>

          <span className="hidden sm:block">
            Cliquez sur une zone pour
            l'explorer
          </span>

        </div>

      </div>

      {/* =====================================================
          LEAFLET — DESIGN
      ===================================================== */}

      <style jsx global>{`
        .leaflet-container {
          font-family: inherit;
          background: #eef2ee;
          z-index: 1;
        }

        .leaflet-control-zoom {
          overflow: hidden;
          border: 1px solid #e5e7eb !important;
          border-radius: 0 !important;
          box-shadow:
            0 4px 12px rgba(0, 0, 0, 0.08) !important;
        }

        .leaflet-control-zoom a {
          width: 32px !important;
          height: 32px !important;
          line-height: 32px !important;
          border: 0 !important;
          border-bottom: 1px solid #e5e7eb !important;
          color: #374151 !important;
          background: #ffffff !important;
          font-size: 16px !important;
        }

        .leaflet-control-zoom a:last-child {
          border-bottom: 0 !important;
        }

        .leaflet-control-zoom a:hover {
          color: #1e7d32 !important;
          background: #f8faf8 !important;
        }

        .leaflet-control-attribution {
          font-size: 8px !important;
          padding: 2px 5px !important;
          background: rgba(
            255,
            255,
            255,
            0.85
          ) !important;
        }

        .pah-department-tooltip {
          border: 0 !important;
          border-radius: 2px !important;
          padding: 6px 9px !important;
          background: #111827 !important;
          color: white !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          box-shadow:
            0 5px 16px rgba(
              0,
              0,
              0,
              0.18
            ) !important;
        }

        .pah-department-tooltip::before {
          display: none !important;
        }

        .pah-department-popup
          .leaflet-popup-content-wrapper {
          border-radius: 0 !important;
          padding: 0 !important;
          box-shadow:
            0 12px 30px rgba(
              0,
              0,
              0,
              0.15
            ) !important;
        }

        .pah-department-popup
          .leaflet-popup-content {
          margin: 0 !important;
          min-width: 190px;
        }

        .pah-department-popup
          .leaflet-popup-tip {
          background: white !important;
        }

        .pah-popup {
          padding: 15px;
        }

        .pah-popup-label {
          margin-bottom: 4px;
          color: #9ca3af;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.15em;
        }

        .pah-popup-title {
          margin-bottom: 12px;
          color: #111827;
          font-size: 17px;
          font-weight: 700;
        }

        .pah-popup-stat {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 8px;
          margin-top: 8px;
          border-top: 1px solid #f0f0f0;
          color: #6b7280;
          font-size: 11px;
        }

        .pah-popup-stat strong {
          color: #111827;
          font-weight: 700;
        }

        .leaflet-interactive {
          outline: none !important;
          transition:
            fill 180ms ease,
            fill-opacity 180ms ease,
            stroke 180ms ease;
        }
      `}</style>
    </section>
  )
}

/* =========================================================
   KPI
========================================================= */

function Kpi({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="border-b border-gray-200 p-5 last:border-r-0 md:border-b-0 md:border-r dark:border-gray-800">

      <p className="text-2xl font-semibold tracking-tight text-gray-950 md:text-3xl dark:text-white">
        {value}
      </p>

      <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-gray-400">
        {label}
      </p>

    </div>
  )
}

/* =========================================================
   METRIC
========================================================= */

function Metric({
  icon,
  value,
  label,
}: {
  icon: ReactNode
  value: string
  label: string
}) {
  return (
    <div className="border-r border-gray-200 p-5 last:border-r-0 dark:border-gray-800">

      <div className="mb-3 text-pah-green">
        {icon}
      </div>

      <p className="text-lg font-semibold text-gray-950 dark:text-white">
        {value}
      </p>

      <p className="mt-1 text-[10px] text-gray-500">
        {label}
      </p>

    </div>
  )
}