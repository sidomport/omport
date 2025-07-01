import { RawImg } from "./components/index.jsx";

export default function MyComponent(props) {
  return (
    <div
      style={{
        pointerEvents: "auto",
        color: "rgb(2, 8, 23)",
        backgroundColor: "rgb(255, 255, 255)",
        font: '400 16px/24px ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" ',
      }}
    >
      <div
        style={{
          fontWeight: "400",
          pointerEvents: "auto",
        }}
      >
        <div
          role="region"
          aria-label="Notifications (F8)"
          tabIndex="-1"
          style={{
            fontWeight: "400",
            pointerEvents: "auto",
          }}
        >
          <ol
            tabIndex="-1"
            style={{
              display: "flex",
              bottom: "0px",
              flexDirection: "column",
              fontWeight: "400",
              maxHeight: "641px",
              maxWidth: "420px",
              pointerEvents: "auto",
              position: "fixed",
              right: "0px",
              width: "100%",
              zIndex: "100",
              padding: "16px",
            }}
          />
        </div>
        <div
          style={{
            backgroundColor: "rgb(255, 255, 255)",
            fontWeight: "400",
            minHeight: "641px",
            pointerEvents: "auto",
          }}
        >
          <section
            style={{
              backgroundImage:
                "linear-gradient(to right bottom, rgb(15, 23, 42), rgb(30, 58, 138), rgb(49, 46, 129))",
              fontWeight: "400",
              minHeight: "641px",
              overflowX: "hidden",
              overflowY: "hidden",
              position: "relative",
              pointerEvents: "auto",
            }}
          >
            <div
              style={{
                bottom: "0px",
                fontWeight: "400",
                left: "0px",
                opacity: "0.1",
                position: "absolute",
                right: "0px",
                top: "0px",
                pointerEvents: "auto",
              }}
            >
              <div
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                  bottom: "0px",
                  fontWeight: "400",
                  left: "0px",
                  position: "absolute",
                  right: "0px",
                  top: "0px",
                  pointerEvents: "auto",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "400",
                minHeight: "641px",
                position: "relative",
                zIndex: "10",
                pointerEvents: "auto",
              }}
            >
              <div
                style={{
                  fontWeight: "400",
                  maxWidth: "1280px",
                  width: "100%",
                  pointerEvents: "auto",
                  margin: "0 auto",
                  padding: "0 24px",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    alignItems: "center",
                    fontWeight: "400",
                    gap: "32px",
                    gridTemplate: "none / repeat(2, minmax(0px, 1fr))",
                    pointerEvents: "auto",
                  }}
                >
                  <div
                    style={{
                      color: "rgb(255, 255, 255)",
                      fontWeight: "400",
                      pointerEvents: "auto",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "400",
                        marginBottom: "32px",
                        pointerEvents: "auto",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          backgroundImage:
                            "linear-gradient(to right bottom, rgb(59, 130, 246), rgb(147, 51, 234))",
                          borderRadius: "16px",
                          boxShadow:
                            "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                          fontWeight: "400",
                          height: "64px",
                          justifyContent: "center",
                          position: "relative",
                          width: "64px",
                          pointerEvents: "auto",
                        }}
                      >
                        <div
                          style={{
                            bottom: "-8px",
                            fontWeight: "400",
                            height: "4px",
                            left: "0px",
                            overflowX: "hidden",
                            overflowY: "hidden",
                            position: "absolute",
                            right: "0px",
                            pointerEvents: "auto",
                          }}
                        >
                          <div
                            style={{
                              animationDuration: "2s",
                              animationIterationCount: "infinite",
                              animationName: "wave",
                              animationTimingFunction: "ease-in-out",
                              backgroundImage:
                                "linear-gradient(to right, rgb(103, 232, 249), rgb(147, 197, 253), rgb(103, 232, 249))",
                              borderRadius: "100% 100% 0px 0px",
                              borderTopLeftRadius: "100%",
                              borderTopRightRadius: "100%",
                              bottom: "0px",
                              fontWeight: "400",
                              height: "100%",
                              left: "0px",
                              position: "absolute",
                              right: "0px",
                              top: "0px",
                              transform: "matrix(1, 0, 0, 0.8, -16, 0)",
                              pointerEvents: "auto",
                            }}
                          />
                          <div
                            style={{
                              animationDelay: "1s",
                              animationDuration: "2s",
                              animationIterationCount: "infinite",
                              animationName: "wave",
                              animationTimingFunction: "ease-in-out",
                              backgroundImage:
                                "linear-gradient(to right, rgb(147, 197, 253), rgb(103, 232, 249), rgb(147, 197, 253))",
                              borderRadius: "100% 100% 0px 0px",
                              borderTopLeftRadius: "100%",
                              borderTopRightRadius: "100%",
                              bottom: "0px",
                              fontWeight: "400",
                              height: "100%",
                              left: "0px",
                              opacity: "0.6",
                              position: "absolute",
                              right: "0px",
                              top: "0px",
                              pointerEvents: "auto",
                            }}
                          />
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            display: "block",
                            animationDuration: "3s",
                            animationIterationCount: "infinite",
                            animationName: "shipRide",
                            animationTimingFunction: "ease-in-out",
                            fill: "none",
                            fontWeight: "400",
                            height: "32px",
                            overflowClipMargin: "content-box",
                            overflowX: "hidden",
                            overflowY: "hidden",
                            position: "relative",
                            stroke: "rgb(255, 255, 255)",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2px",
                            width: "32px",
                            zIndex: "10",
                            transform: "matrix(1, 0, 0, 1, 0, 0)",
                            pointerEvents: "auto",
                          }}
                        >
                          <path
                            d="M12 10.189V14"
                            style={{
                              display: "inline",
                              d: 'path("M 12 10.189 V 14")',
                              fill: "none",
                              fontWeight: "400",
                              stroke: "rgb(255, 255, 255)",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2px",
                              transformOrigin: "0px 0px",
                              pointerEvents: "auto",
                            }}
                          />
                          <path
                            d="M12 2v3"
                            style={{
                              display: "inline",
                              d: 'path("M 12 2 V 5")',
                              fill: "none",
                              fontWeight: "400",
                              stroke: "rgb(255, 255, 255)",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2px",
                              transformOrigin: "0px 0px",
                              pointerEvents: "auto",
                            }}
                          />
                          <path
                            d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"
                            style={{
                              display: "inline",
                              d: 'path("M 19 13 V 7 A 2 2 0 0 0 17 5 H 7 A 2 2 0 0 0 5 7 V 13")',
                              fill: "none",
                              fontWeight: "400",
                              stroke: "rgb(255, 255, 255)",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2px",
                              transformOrigin: "0px 0px",
                              pointerEvents: "auto",
                            }}
                          />
                          <path
                            d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"
                            style={{
                              display: "inline",
                              d: 'path("M 19.38 20 A 11.6 11.6 0 0 0 21 14 L 12.812 10.361 A 2 2 0 0 0 11.188 10.361 L 3 14 A 11.6 11.6 0 0 0 5.81 21.76")',
                              fill: "none",
                              fontWeight: "400",
                              stroke: "rgb(255, 255, 255)",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2px",
                              transformOrigin: "0px 0px",
                              pointerEvents: "auto",
                            }}
                          />
                          <path
                            d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
                            style={{
                              display: "inline",
                              d: 'path("M 2 21 C 2.6 21.5 3.2 22 4.5 22 C 7 22 7 20 9.5 20 C 10.8 20 11.4 20.5 12 21 S 13.2 22 14.5 22 C 17 22 17 20 19.5 20 C 20.8 20 21.4 20.5 22 21")',
                              fill: "none",
                              fontWeight: "400",
                              stroke: "rgb(255, 255, 255)",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2px",
                              transformOrigin: "0px 0px",
                              pointerEvents: "auto",
                            }}
                          />
                        </svg>
                      </div>
                      <div
                        style={{
                          fontWeight: "400",
                          marginLeft: "16px",
                          pointerEvents: "auto",
                        }}
                      >
                        <h1
                          style={{
                            backgroundClip: "text",
                            backgroundImage:
                              "linear-gradient(to right, rgb(255, 255, 255), rgb(191, 219, 254))",
                            color: "transparent",
                            fontSize: "48px",
                            fontWeight: "700",
                            lineHeight: "48px",
                            pointerEvents: "auto",
                          }}
                        >
                          Omport
                        </h1>
                        <p
                          style={{
                            color: "rgb(191, 219, 254)",
                            fontSize: "20px",
                            fontWeight: "500",
                            lineHeight: "28px",
                            marginTop: "4px",
                            pointerEvents: "auto",
                          }}
                        >
                          One Market for Import and Export
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        fontWeight: "400",
                        marginTop: "32px",
                        pointerEvents: "auto",
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "36px",
                          fontWeight: "700",
                          lineHeight: "45px",
                          pointerEvents: "auto",
                        }}
                      >
                        <span>Connect with Global </span>
                        <span
                          style={{
                            backgroundClip: "text",
                            backgroundImage:
                              "linear-gradient(to right, rgb(52, 211, 153), rgb(34, 211, 238))",
                            color: "transparent",
                            fontWeight: "700",
                            pointerEvents: "auto",
                          }}
                        >
                          Suppliers & Buyers
                        </span>
                      </h2>
                      <p
                        style={{
                          color: "rgb(226, 232, 240)",
                          fontSize: "20px",
                          fontWeight: "400",
                          lineHeight: "32.5px",
                          marginTop: "24px",
                          maxWidth: "576px",
                          pointerEvents: "auto",
                        }}
                      >
                        The world's most trusted B2B export platform with secure
                        transactions, verified suppliers, and integrated
                        logistics solutions.
                      </p>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        fontWeight: "400",
                        gap: "16px",
                        gridTemplate: "none / repeat(2, minmax(0px, 1fr))",
                        marginTop: "32px",
                        maxWidth: "672px",
                        pointerEvents: "auto",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontWeight: "400",
                          pointerEvents: "auto",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            display: "block",
                            color: "rgb(52, 211, 153)",
                            fill: "none",
                            fontWeight: "400",
                            height: "20px",
                            overflowClipMargin: "content-box",
                            overflowX: "hidden",
                            overflowY: "hidden",
                            stroke: "rgb(52, 211, 153)",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2px",
                            width: "20px",
                            pointerEvents: "auto",
                          }}
                        >
                          <path
                            d="M21.801 10A10 10 0 1 1 17 3.335"
                            style={{
                              display: "inline",
                              d: 'path("M 21.801 10 A 10 10 0 1 1 17 3.335")',
                              fill: "none",
                              fontWeight: "400",
                              stroke: "rgb(52, 211, 153)",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2px",
                              transformOrigin: "0px 0px",
                              pointerEvents: "auto",
                            }}
                          />
                          <path
                            d="m9 11 3 3L22 4"
                            style={{
                              display: "inline",
                              d: 'path("M 9 11 L 12 14 L 22 4")',
                              fill: "none",
                              fontWeight: "400",
                              stroke: "rgb(52, 211, 153)",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2px",
                              transformOrigin: "0px 0px",
                              pointerEvents: "auto",
                            }}
                          />
                        </svg>
                        <span
                          style={{
                            color: "rgb(226, 232, 240)",
                            fontWeight: "400",
                            marginLeft: "12px",
                            pointerEvents: "auto",
                          }}
                        >
                          Verified Global Suppliers
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontWeight: "400",
                          pointerEvents: "auto",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            display: "block",
                            color: "rgb(52, 211, 153)",
                            fill: "none",
                            fontWeight: "400",
                            height: "20px",
                            overflowClipMargin: "content-box",
                            overflowX: "hidden",
                            overflowY: "hidden",
                            stroke: "rgb(52, 211, 153)",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2px",
                            width: "20px",
                            pointerEvents: "auto",
                          }}
                        >
                          <path
                            d="M21.801 10A10 10 0 1 1 17 3.335"
                            style={{
                              display: "inline",
                              d: 'path("M 21.801 10 A 10 10 0 1 1 17 3.335")',
                              fill: "none",
                              fontWeight: "400",
                              stroke: "rgb(52, 211, 153)",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2px",
                              transformOrigin: "0px 0px",
                              pointerEvents: "auto",
                            }}
                          />
                          <path
                            d="m9 11 3 3L22 4"
                            style={{
                              display: "inline",
                              d: 'path("M 9 11 L 12 14 L 22 4")',
                              fill: "none",
                              fontWeight: "400",
                              stroke: "rgb(52, 211, 153)",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2px",
                              transformOrigin: "0px 0px",
                              pointerEvents: "auto",
                            }}
                          />
                        </svg>
                        <span
                          style={{
                            color: "rgb(226, 232, 240)",
                            fontWeight: "400",
                            marginLeft: "12px",
                            pointerEvents: "auto",
                          }}
                        >
                          Secure Escrow Protection
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontWeight: "400",
                          pointerEvents: "auto",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            display: "block",
                            color: "rgb(52, 211, 153)",
                            fill: "none",
                            fontWeight: "400",
                            height: "20px",
                            overflowClipMargin: "content-box",
                            overflowX: "hidden",
                            overflowY: "hidden",
                            stroke: "rgb(52, 211, 153)",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2px",
                            width: "20px",
                            pointerEvents: "auto",
                          }}
                        >
                          <path
                            d="M21.801 10A10 10 0 1 1 17 3.335"
                            style={{
                              display: "inline",
                              d: 'path("M 21.801 10 A 10 10 0 1 1 17 3.335")',
                              fill: "none",
                              fontWeight: "400",
                              stroke: "rgb(52, 211, 153)",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2px",
                              transformOrigin: "0px 0px",
                              pointerEvents: "auto",
                            }}
                          />
                          <path
                            d="m9 11 3 3L22 4"
                            style={{
                              display: "inline",
                              d: 'path("M 9 11 L 12 14 L 22 4")',
                              fill: "none",
                              fontWeight: "400",
                              stroke: "rgb(52, 211, 153)",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2px",
                              transformOrigin: "0px 0px",
                              pointerEvents: "auto",
                            }}
                          />
                        </svg>
                        <span
                          style={{
                            color: "rgb(226, 232, 240)",
                            fontWeight: "400",
                            marginLeft: "12px",
                            pointerEvents: "auto",
                          }}
                        >
                          Integrated Logistics
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontWeight: "400",
                          pointerEvents: "auto",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            display: "block",
                            color: "rgb(52, 211, 153)",
                            fill: "none",
                            fontWeight: "400",
                            height: "20px",
                            overflowClipMargin: "content-box",
                            overflowX: "hidden",
                            overflowY: "hidden",
                            stroke: "rgb(52, 211, 153)",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2px",
                            width: "20px",
                            pointerEvents: "auto",
                          }}
                        >
                          <path
                            d="M21.801 10A10 10 0 1 1 17 3.335"
                            style={{
                              display: "inline",
                              d: 'path("M 21.801 10 A 10 10 0 1 1 17 3.335")',
                              fill: "none",
                              fontWeight: "400",
                              stroke: "rgb(52, 211, 153)",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2px",
                              transformOrigin: "0px 0px",
                              pointerEvents: "auto",
                            }}
                          />
                          <path
                            d="m9 11 3 3L22 4"
                            style={{
                              display: "inline",
                              d: 'path("M 9 11 L 12 14 L 22 4")',
                              fill: "none",
                              fontWeight: "400",
                              stroke: "rgb(52, 211, 153)",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2px",
                              transformOrigin: "0px 0px",
                              pointerEvents: "auto",
                            }}
                          />
                        </svg>
                        <span
                          style={{
                            color: "rgb(226, 232, 240)",
                            fontWeight: "400",
                            marginLeft: "12px",
                            pointerEvents: "auto",
                          }}
                        >
                          24/7 Support
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        fontWeight: "400",
                        gap: "16px",
                        marginTop: "32px",
                        paddingTop: "16px",
                        pointerEvents: "auto",
                      }}
                    >
                      <button
                        style={{
                          backgroundColor: "rgb(12, 141, 141)",
                          backgroundImage:
                            "linear-gradient(to right, rgb(16, 185, 129), rgb(6, 182, 212))",
                          borderRadius: "8px",
                          boxShadow:
                            "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                          fontSize: "18px",
                          fontWeight: "600",
                          gap: "8px",
                          height: "40px",
                          lineHeight: "28px",
                          textWrap: "nowrap",
                          transitionDuration: "0.15s",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
                          whiteSpace: "nowrap",
                          pointerEvents: "auto",
                          borderColor: "rgba(0, 0, 0, 0)",
                          padding: "12px 32px",
                          border: "none",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        Explore Products
                      </button>
                      <button
                        style={{
                          backgroundColor: "rgb(12, 141, 141)",
                          backgroundImage:
                            "linear-gradient(to right, rgb(16, 185, 129), rgb(6, 182, 212))",
                          borderRadius: "8px",
                          boxShadow:
                            "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                          fontSize: "18px",
                          fontWeight: "600",
                          gap: "8px",
                          height: "40px",
                          lineHeight: "28px",
                          textWrap: "nowrap",
                          transitionDuration: "0.15s",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
                          whiteSpace: "nowrap",
                          pointerEvents: "auto",
                          borderColor: "rgba(0, 0, 0, 0)",
                          padding: "12px 32px",
                          border: "none",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        Watch Demo
                      </button>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      fontWeight: "400",
                      justifyContent: "flex-end",
                      pointerEvents: "auto",
                    }}
                  >
                    <div
                      style={{
                        backdropFilter: "blur(4px)",
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        borderRadius: "8px",
                        boxShadow:
                          "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
                        fontWeight: "400",
                        maxWidth: "448px",
                        width: "100%",
                        pointerEvents: "auto",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          fontWeight: "400",
                          textAlign: "center",
                          pointerEvents: "auto",
                          padding: "24px 24px 16px",
                        }}
                      >
                        <h3
                          style={{
                            color: "rgb(17, 24, 39)",
                            fontSize: "24px",
                            fontWeight: "700",
                            letterSpacing: "-0.6px",
                            lineHeight: "32px",
                            pointerEvents: "auto",
                          }}
                        >
                          Join Omport Today
                        </h3>
                        <p
                          style={{
                            color: "rgb(75, 85, 99)",
                            fontWeight: "400",
                            marginTop: "6px",
                            pointerEvents: "auto",
                          }}
                        >
                          Connect with global suppliers and buyers
                        </p>
                      </div>
                      <div
                        style={{
                          fontWeight: "400",
                          pointerEvents: "auto",
                          padding: "0 24px 24px",
                        }}
                      >
                        <div
                          dir="ltr"
                          style={{
                            fontWeight: "400",
                            width: "100%",
                            pointerEvents: "auto",
                          }}
                        >
                          <div
                            role="tablist"
                            aria-orientation="horizontal"
                            tabIndex="0"
                            style={{
                              display: "grid",
                              alignItems: "center",
                              backgroundColor: "rgba(243, 244, 246, 0.8)",
                              borderRadius: "6px",
                              color: "rgb(100, 116, 139)",
                              fontWeight: "400",
                              gridTemplate:
                                "none / repeat(2, minmax(0px, 1fr))",
                              height: "40px",
                              justifyContent: "center",
                              width: "100%",
                              pointerEvents: "auto",
                              padding: "4px",
                            }}
                          >
                            <button
                              type="button"
                              role="tab"
                              aria-selected="true"
                              aria-controls="radix-:r0:-content-signup"
                              tabIndex="-1"
                              style={{
                                backgroundColor: "rgb(255, 255, 255)",
                                borderRadius: "4px",
                                boxShadow:
                                  "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
                                color: "rgb(67, 56, 202)",
                                fontSize: "14px",
                                fontWeight: "500",
                                lineHeight: "20px",
                                textWrap: "nowrap",
                                transitionDuration: "0.15s",
                                transitionTimingFunction:
                                  "cubic-bezier(0.4, 0, 0.2, 1)",
                                whiteSpace: "nowrap",
                                pointerEvents: "auto",
                                borderColor: "rgba(0, 0, 0, 0)",
                                padding: "6px 12px",
                                border: "none",
                                cursor: "pointer",
                              }}
                            >
                              Sign Up
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-:r0:-content-login"
                              tabIndex="-1"
                              style={{
                                borderRadius: "4px",
                                fontSize: "14px",
                                fontWeight: "500",
                                lineHeight: "20px",
                                textWrap: "nowrap",
                                transitionDuration: "0.15s",
                                transitionTimingFunction:
                                  "cubic-bezier(0.4, 0, 0.2, 1)",
                                whiteSpace: "nowrap",
                                pointerEvents: "auto",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                borderColor: "rgba(0, 0, 0, 0)",
                                padding: "6px 12px",
                                border: "none",
                                cursor: "pointer",
                              }}
                            >
                              Login
                            </button>
                          </div>
                          <div
                            role="tabpanel"
                            aria-labelledby="radix-:r0:-trigger-signup"
                            tabIndex="0"
                            style={{
                              fontWeight: "400",
                              marginTop: "24px",
                              pointerEvents: "auto",
                            }}
                          >
                            <form
                              style={{
                                fontWeight: "400",
                                pointerEvents: "auto",
                              }}
                            >
                              <div
                                style={{
                                  fontWeight: "400",
                                  pointerEvents: "auto",
                                }}
                              >
                                <label
                                  htmlFor="signup-name"
                                  style={{
                                    color: "rgb(55, 65, 81)",
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    lineHeight: "20px",
                                    pointerEvents: "auto",
                                  }}
                                >
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  placeholder="Enter your full name"
                                  required=""
                                  defaultValue=""
                                  style={{
                                    display: "flex",
                                    borderColor: "rgb(229, 231, 235)",
                                    borderRadius: "6px",
                                    borderWidth: "1px",
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    height: "44px",
                                    lineHeight: "20px",
                                    marginTop: "8px",
                                    width: "100%",
                                    pointerEvents: "auto",
                                    padding: "8px 12px",
                                    boxSizing: "border-box",
                                  }}
                                />
                              </div>
                              <div
                                style={{
                                  fontWeight: "400",
                                  marginTop: "16px",
                                  pointerEvents: "auto",
                                }}
                              >
                                <label
                                  htmlFor="signup-email"
                                  style={{
                                    color: "rgb(55, 65, 81)",
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    lineHeight: "20px",
                                    pointerEvents: "auto",
                                  }}
                                >
                                  Business Email
                                </label>
                                <input
                                  type="email"
                                  placeholder="Enter your business email"
                                  required=""
                                  defaultValue=""
                                  style={{
                                    display: "flex",
                                    borderColor: "rgb(229, 231, 235)",
                                    borderRadius: "6px",
                                    borderWidth: "1px",
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    height: "44px",
                                    lineHeight: "20px",
                                    marginTop: "8px",
                                    width: "100%",
                                    pointerEvents: "auto",
                                    padding: "8px 12px",
                                    boxSizing: "border-box",
                                  }}
                                />
                              </div>
                              <div
                                style={{
                                  fontWeight: "400",
                                  marginTop: "16px",
                                  pointerEvents: "auto",
                                }}
                              >
                                <label
                                  htmlFor="signup-company"
                                  style={{
                                    color: "rgb(55, 65, 81)",
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    lineHeight: "20px",
                                    pointerEvents: "auto",
                                  }}
                                >
                                  Company Name
                                </label>
                                <input
                                  type="text"
                                  placeholder="Enter your company name"
                                  required=""
                                  defaultValue=""
                                  style={{
                                    display: "flex",
                                    borderColor: "rgb(229, 231, 235)",
                                    borderRadius: "6px",
                                    borderWidth: "1px",
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    height: "44px",
                                    lineHeight: "20px",
                                    marginTop: "8px",
                                    width: "100%",
                                    pointerEvents: "auto",
                                    padding: "8px 12px",
                                    boxSizing: "border-box",
                                  }}
                                />
                              </div>
                              <div
                                style={{
                                  fontWeight: "400",
                                  marginTop: "16px",
                                  pointerEvents: "auto",
                                }}
                              >
                                <label
                                  htmlFor="signup-password"
                                  style={{
                                    color: "rgb(55, 65, 81)",
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    lineHeight: "20px",
                                    pointerEvents: "auto",
                                  }}
                                >
                                  Password
                                </label>
                                <input
                                  type="password"
                                  placeholder="Create a strong password"
                                  required=""
                                  defaultValue=""
                                  style={{
                                    display: "flex",
                                    borderColor: "rgb(229, 231, 235)",
                                    borderRadius: "6px",
                                    borderWidth: "1px",
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    height: "44px",
                                    lineHeight: "20px",
                                    marginTop: "8px",
                                    width: "100%",
                                    pointerEvents: "auto",
                                    padding: "8px 12px",
                                    boxSizing: "border-box",
                                  }}
                                />
                              </div>
                              <div
                                style={{
                                  fontSize: "14px",
                                  fontWeight: "400",
                                  lineHeight: "20px",
                                  marginTop: "16px",
                                  pointerEvents: "auto",
                                }}
                              >
                                <label
                                  style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    color: "rgb(75, 85, 99)",
                                    fontWeight: "400",
                                    pointerEvents: "auto",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    required=""
                                    style={{
                                      backgroundColor: "rgba(0, 0, 0, 0)",
                                      color: "rgb(13, 148, 136)",
                                      display: "block",
                                      fontWeight: "400",
                                      marginTop: "2px",
                                      overflowX: "visible",
                                      overflowY: "visible",
                                      pointerEvents: "auto",
                                    }}
                                  />
                                  <span
                                    style={{
                                      display: "block",
                                      fontWeight: "400",
                                      marginLeft: "8px",
                                      pointerEvents: "auto",
                                    }}
                                  >
                                    <span>I agree to Omport's </span>
                                    <a
                                      style={{
                                        color: "rgb(79, 70, 229)",
                                        fontWeight: "500",
                                        pointerEvents: "auto",
                                      }}
                                    >
                                      Terms of Service
                                    </a>
                                    <span> and </span>
                                    <a
                                      style={{
                                        color: "rgb(13, 148, 136)",
                                        fontWeight: "500",
                                        pointerEvents: "auto",
                                      }}
                                    >
                                      Privacy Policy
                                    </a>
                                  </span>
                                </label>
                              </div>
                              <button
                                type="submit"
                                style={{
                                  backgroundColor: "rgb(12, 141, 141)",
                                  backgroundImage:
                                    "linear-gradient(to right, rgb(79, 70, 229), rgb(147, 51, 234))",
                                  borderRadius: "6px",
                                  boxShadow:
                                    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                                  color: "rgb(255, 255, 255)",
                                  fontWeight: "500",
                                  gap: "8px",
                                  height: "44px",
                                  marginTop: "16px",
                                  textWrap: "nowrap",
                                  transitionDuration: "0.15s",
                                  transitionProperty:
                                    "color, background-color, border-color, text-decoration-color, fill, stroke",
                                  transitionTimingFunction:
                                    "cubic-bezier(0.4, 0, 0.2, 1)",
                                  whiteSpace: "nowrap",
                                  width: "100%",
                                  pointerEvents: "auto",
                                  borderColor: "rgba(0, 0, 0, 0)",
                                  padding: "8px 16px",
                                  border: "none",
                                  cursor: "pointer",
                                }}
                              >
                                Get Started Free
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                bottom: "32px",
                color: "rgba(255, 255, 255, 0.6)",
                fontWeight: "400",
                left: "50%",
                position: "absolute",
                transform: "matrix(1, 0, 0, 1, -50.0703, 0)",
                pointerEvents: "auto",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "20px",
                  marginBottom: "8px",
                  textAlign: "center",
                  pointerEvents: "auto",
                }}
              >
                Scroll to explore
              </div>
              <div
                style={{
                  display: "flex",
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  borderRadius: "9999px",
                  borderWidth: "2px",
                  fontWeight: "400",
                  height: "40px",
                  justifyContent: "center",
                  width: "24px",
                  pointerEvents: "auto",
                }}
              >
                <div
                  style={{
                    animationDuration: "1s",
                    animationIterationCount: "infinite",
                    animationName: "bounce",
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                    borderRadius: "9999px",
                    fontWeight: "400",
                    height: "12px",
                    marginTop: "8px",
                    width: "4px",
                    transform: "matrix(1, 0, 0, 1, 0, -3)",
                    pointerEvents: "auto",
                  }}
                />
              </div>
            </div>
          </section>
          <section
            style={{
              backgroundColor: "rgb(249, 250, 251)",
              fontWeight: "400",
              pointerEvents: "auto",
              padding: "80px 0",
            }}
          >
            <div
              style={{
                fontWeight: "400",
                maxWidth: "1280px",
                pointerEvents: "auto",
                margin: "0 auto",
                padding: "0 24px",
              }}
            >
              <div
                style={{
                  fontWeight: "400",
                  marginBottom: "80px",
                  textAlign: "center",
                  pointerEvents: "auto",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    backgroundImage:
                      "linear-gradient(to right, rgb(224, 231, 255), rgb(243, 232, 255))",
                    borderRadius: "9999px",
                    color: "rgb(67, 56, 202)",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "20px",
                    marginBottom: "24px",
                    pointerEvents: "auto",
                    padding: "12px 24px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      display: "block",
                      fill: "none",
                      fontWeight: "600",
                      height: "16px",
                      marginRight: "8px",
                      overflowClipMargin: "content-box",
                      overflowX: "hidden",
                      overflowY: "hidden",
                      stroke: "rgb(67, 56, 202)",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2px",
                      width: "16px",
                      pointerEvents: "auto",
                    }}
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      style={{
                        display: "inline",
                        fill: "none",
                        fontWeight: "600",
                        stroke: "rgb(67, 56, 202)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2px",
                        transformOrigin: "0px 0px",
                        pointerEvents: "auto",
                      }}
                    />
                  </svg>
                  <span>Premium Features</span>
                </div>
                <h2
                  style={{
                    color: "rgb(17, 24, 39)",
                    fontSize: "48px",
                    fontWeight: "700",
                    lineHeight: "48px",
                    marginBottom: "24px",
                    pointerEvents: "auto",
                  }}
                >
                  <span>Why Choose </span>
                  <span
                    style={{
                      backgroundClip: "text",
                      backgroundImage:
                        "linear-gradient(to right, rgb(79, 70, 229), rgb(147, 51, 234), rgb(219, 39, 119))",
                      color: "transparent",
                      fontWeight: "700",
                      pointerEvents: "auto",
                    }}
                  >
                    Omport?
                  </span>
                </h2>
                <p
                  style={{
                    color: "rgb(75, 85, 99)",
                    fontSize: "20px",
                    fontWeight: "400",
                    lineHeight: "32.5px",
                    maxWidth: "896px",
                    pointerEvents: "auto",
                    margin: "0 auto",
                  }}
                >
                  Comprehensive solutions designed to make international trade
                  secure, efficient, and profitable. Experience the future of
                  global commerce with our cutting-edge platform.
                </p>
              </div>
              <div
                style={{
                  display: "grid",
                  fontWeight: "400",
                  gap: "32px",
                  gridTemplate: "none / repeat(3, minmax(0px, 1fr))",
                  pointerEvents: "auto",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgb(255, 255, 255)",
                    backgroundImage:
                      "linear-gradient(to right bottom, rgb(224, 231, 255), rgb(243, 232, 255), rgb(251, 207, 232))",
                    borderRadius: "16px",
                    boxShadow:
                      "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
                    fontWeight: "400",
                    overflowX: "hidden",
                    overflowY: "hidden",
                    position: "relative",
                    transitionDuration: "0.5s",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    pointerEvents: "auto",
                    padding: "32px",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      backgroundImage:
                        "linear-gradient(to right bottom, rgb(99, 102, 241), rgb(147, 51, 234))",
                      borderRadius: "16px",
                      boxShadow:
                        "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                      fontWeight: "400",
                      height: "80px",
                      justifyContent: "center",
                      marginBottom: "24px",
                      overflowX: "hidden",
                      overflowY: "hidden",
                      position: "relative",
                      transitionDuration: "0.5s",
                      transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
                      width: "80px",
                      pointerEvents: "auto",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        display: "block",
                        color: "rgb(255, 255, 255)",
                        fill: "none",
                        fontWeight: "400",
                        height: "24px",
                        overflowClipMargin: "content-box",
                        overflowX: "hidden",
                        overflowY: "hidden",
                        stroke: "rgb(255, 255, 255)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2px",
                        width: "24px",
                        pointerEvents: "auto",
                      }}
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                        style={{
                          display: "inline",
                          fill: "none",
                          fontWeight: "400",
                          stroke: "rgb(255, 255, 255)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2px",
                          transformOrigin: "0px 0px",
                          pointerEvents: "auto",
                        }}
                      />
                    </svg>
                  </div>
                  <h3
                    style={{
                      color: "rgb(17, 24, 39)",
                      fontSize: "20px",
                      fontWeight: "700",
                      lineHeight: "28px",
                      marginBottom: "16px",
                      pointerEvents: "auto",
                    }}
                  >
                    Blockchain Based Escrow Protection
                  </h3>
                  <p
                    style={{
                      color: "rgb(55, 65, 81)",
                      fontWeight: "400",
                      lineHeight: "26px",
                      pointerEvents: "auto",
                    }}
                  >
                    Your payments are protected with advanced escrow services
                    until goods are delivered and verified.
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(255, 255, 255)",
                    backgroundImage:
                      "linear-gradient(to right bottom, rgb(219, 234, 254), rgb(207, 250, 254), rgb(153, 246, 228))",
                    borderRadius: "16px",
                    boxShadow:
                      "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
                    fontWeight: "400",
                    overflowX: "hidden",
                    overflowY: "hidden",
                    position: "relative",
                    transitionDuration: "0.5s",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    pointerEvents: "auto",
                    padding: "32px",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      backgroundImage:
                        "linear-gradient(to right bottom, rgb(59, 130, 246), rgb(8, 145, 178))",
                      borderRadius: "16px",
                      boxShadow:
                        "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                      fontWeight: "400",
                      height: "80px",
                      justifyContent: "center",
                      marginBottom: "24px",
                      overflowX: "hidden",
                      overflowY: "hidden",
                      position: "relative",
                      transitionDuration: "0.5s",
                      transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
                      width: "80px",
                      pointerEvents: "auto",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        display: "block",
                        color: "rgb(255, 255, 255)",
                        fill: "none",
                        fontWeight: "400",
                        height: "40px",
                        overflowClipMargin: "content-box",
                        overflowX: "hidden",
                        overflowY: "hidden",
                        stroke: "rgb(255, 255, 255)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2px",
                        width: "40px",
                        pointerEvents: "auto",
                      }}
                    >
                      <rect
                        width="20"
                        height="14"
                        x="2"
                        y="5"
                        rx="2"
                        style={{
                          display: "inline",
                          fill: "none",
                          fontWeight: "400",
                          height: "14px",
                          rx: "2px",
                          stroke: "rgb(255, 255, 255)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2px",
                          transformOrigin: "0px 0px",
                          width: "20px",
                          x: "2px",
                          y: "5px",
                          pointerEvents: "auto",
                        }}
                      />
                      <line
                        x1="2"
                        x2="22"
                        y1="10"
                        y2="10"
                        style={{
                          display: "inline",
                          fill: "none",
                          fontWeight: "400",
                          stroke: "rgb(255, 255, 255)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2px",
                          transformOrigin: "0px 0px",
                          pointerEvents: "auto",
                        }}
                      />
                    </svg>
                  </div>
                  <h3
                    style={{
                      color: "rgb(17, 24, 39)",
                      fontSize: "20px",
                      fontWeight: "700",
                      lineHeight: "28px",
                      marginBottom: "16px",
                      pointerEvents: "auto",
                    }}
                  >
                    Hassle-Free Payments
                  </h3>
                  <p
                    style={{
                      color: "rgb(55, 65, 81)",
                      fontWeight: "400",
                      lineHeight: "26px",
                      pointerEvents: "auto",
                    }}
                  >
                    Multiple payment options including wire transfers, letters
                    of credit, and digital payments.
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(255, 255, 255)",
                    backgroundImage:
                      "linear-gradient(to right bottom, rgb(254, 243, 199), rgb(254, 249, 195), rgb(254, 215, 170))",
                    borderRadius: "16px",
                    boxShadow:
                      "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
                    fontWeight: "400",
                    overflowX: "hidden",
                    overflowY: "hidden",
                    position: "relative",
                    transitionDuration: "0.5s",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    pointerEvents: "auto",
                    padding: "32px",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      backgroundImage:
                        "linear-gradient(to right bottom, rgb(245, 158, 11), rgb(234, 88, 12))",
                      borderRadius: "16px",
                      boxShadow:
                        "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                      fontWeight: "400",
                      height: "80px",
                      justifyContent: "center",
                      marginBottom: "24px",
                      overflowX: "hidden",
                      overflowY: "hidden",
                      position: "relative",
                      transitionDuration: "0.5s",
                      transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
                      width: "80px",
                      pointerEvents: "auto",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        display: "block",
                        color: "rgb(255, 255, 255)",
                        fill: "none",
                        fontWeight: "400",
                        height: "40px",
                        overflowClipMargin: "content-box",
                        overflowX: "hidden",
                        overflowY: "hidden",
                        stroke: "rgb(255, 255, 255)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2px",
                        width: "40px",
                        pointerEvents: "auto",
                      }}
                    >
                      <path
                        d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
                        style={{
                          display: "inline",
                          fill: "none",
                          fontWeight: "400",
                          stroke: "rgb(255, 255, 255)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2px",
                          transformOrigin: "0px 0px",
                          pointerEvents: "auto",
                        }}
                      />
                      <path
                        d="M15 18H9"
                        style={{
                          display: "inline",
                          fill: "none",
                          fontWeight: "400",
                          stroke: "rgb(255, 255, 255)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2px",
                          transformOrigin: "0px 0px",
                          pointerEvents: "auto",
                        }}
                      />
                      <path
                        d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"
                        style={{
                          display: "inline",
                          fill: "none",
                          fontWeight: "400",
                          stroke: "rgb(255, 255, 255)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2px",
                          transformOrigin: "0px 0px",
                          pointerEvents: "auto",
                        }}
                      />
                      <circle
                        cx="17"
                        cy="18"
                        r="2"
                        style={{
                          display: "inline",
                          fill: "none",
                          fontWeight: "400",
                          stroke: "rgb(255, 255, 255)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2px",
                          transformOrigin: "0px 0px",
                          pointerEvents: "auto",
                        }}
                      />
                      <circle
                        cx="7"
                        cy="18"
                        r="2"
                        style={{
                          display: "inline",
                          fill: "none",
                          fontWeight: "400",
                          stroke: "rgb(255, 255, 255)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2px",
                          transformOrigin: "0px 0px",
                          pointerEvents: "auto",
                        }}
                      />
                    </svg>
                  </div>
                  <h3
                    style={{
                      color: "rgb(17, 24, 39)",
                      fontSize: "20px",
                      fontWeight: "700",
                      lineHeight: "28px",
                      marginBottom: "16px",
                      pointerEvents: "auto",
                    }}
                  >
                    Trusted Freight & CHA Partners
                  </h3>
                  <p
                    style={{
                      color: "rgb(55, 65, 81)",
                      fontWeight: "400",
                      lineHeight: "26px",
                      pointerEvents: "auto",
                    }}
                  >
                    Reliable shipping partners and customs clearance agents for
                    seamless logistics.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            style={{
              backgroundColor: "rgb(255, 255, 255)",
              fontWeight: "400",
              pointerEvents: "auto",
              padding: "80px 0",
            }}
          >
            <div
              style={{
                fontWeight: "400",
                maxWidth: "1280px",
                pointerEvents: "auto",
                margin: "0 auto",
                padding: "0 24px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  alignItems: "center",
                  fontWeight: "400",
                  gap: "64px",
                  gridTemplate: "none / repeat(2, minmax(0px, 1fr))",
                  pointerEvents: "auto",
                }}
              >
                <div
                  style={{
                    fontWeight: "400",
                    pointerEvents: "auto",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      backgroundColor: "rgb(238, 242, 255)",
                      borderRadius: "9999px",
                      color: "rgb(67, 56, 202)",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "20px",
                      marginBottom: "24px",
                      pointerEvents: "auto",
                      padding: "8px 16px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        display: "block",
                        fill: "none",
                        fontWeight: "500",
                        height: "16px",
                        marginRight: "8px",
                        overflowClipMargin: "content-box",
                        overflowX: "hidden",
                        overflowY: "hidden",
                        stroke: "rgb(67, 56, 202)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2px",
                        width: "16px",
                        pointerEvents: "auto",
                      }}
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        style={{
                          display: "inline",
                          fill: "none",
                          fontWeight: "500",
                          stroke: "rgb(67, 56, 202)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2px",
                          transformOrigin: "0px 0px",
                          pointerEvents: "auto",
                        }}
                      />
                      <path
                        d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
                        style={{
                          display: "inline",
                          fill: "none",
                          fontWeight: "500",
                          stroke: "rgb(67, 56, 202)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2px",
                          transformOrigin: "0px 0px",
                          pointerEvents: "auto",
                        }}
                      />
                      <path
                        d="M2 12h20"
                        style={{
                          display: "inline",
                          fill: "none",
                          fontWeight: "500",
                          stroke: "rgb(67, 56, 202)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2px",
                          transformOrigin: "0px 0px",
                          pointerEvents: "auto",
                        }}
                      />
                    </svg>
                    <span>Global Logistics Network</span>
                  </div>
                  <h2
                    style={{
                      color: "rgb(17, 24, 39)",
                      fontSize: "36px",
                      fontWeight: "700",
                      lineHeight: "40px",
                      marginBottom: "24px",
                      pointerEvents: "auto",
                    }}
                  >
                    Integrated Logistics Network
                  </h2>
                  <p
                    style={{
                      color: "rgb(75, 85, 99)",
                      fontSize: "20px",
                      fontWeight: "400",
                      lineHeight: "32.5px",
                      marginBottom: "32px",
                      pointerEvents: "auto",
                    }}
                  >
                    Partner with the world's leading shipping and logistics
                    companies for reliable, trackable deliveries anywhere in the
                    world. Our integrated network ensures your goods reach their
                    destination safely and on time.
                  </p>
                  <button
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      backgroundColor: "rgb(79, 70, 229)",
                      backgroundImage:
                        "linear-gradient(to right, rgb(79, 70, 229), rgb(147, 51, 234))",
                      borderRadius: "8px",
                      boxShadow:
                        "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                      color: "rgb(255, 255, 255)",
                      fontSize: "18px",
                      fontWeight: "500",
                      gap: "8px",
                      height: "40px",
                      justifyContent: "center",
                      lineHeight: "28px",
                      textWrap: "nowrap",
                      transitionDuration: "0.15s",
                      transitionProperty:
                        "color, background-color, border-color, text-decoration-color, fill, stroke",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      whiteSpace: "nowrap",
                      pointerEvents: "auto",
                      borderColor: "rgba(0, 0, 0, 0)",
                      padding: "12px 32px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <span>Get Shipping Quote</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        display: "block",
                        fill: "none",
                        fontWeight: "500",
                        height: "16px",
                        marginLeft: "8px",
                        overflowClipMargin: "content-box",
                        overflowX: "hidden",
                        overflowY: "hidden",
                        pointerEvents: "auto",
                        stroke: "rgb(255, 255, 255)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2px",
                        width: "16px",
                      }}
                    >
                      <path
                        d="M5 12h14"
                        style={{
                          display: "inline",
                          fill: "none",
                          fontWeight: "500",
                          pointerEvents: "auto",
                          stroke: "rgb(255, 255, 255)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2px",
                          transformOrigin: "0px 0px",
                        }}
                      />
                      <path
                        d="m12 5 7 7-7 7"
                        style={{
                          display: "inline",
                          fill: "none",
                          fontWeight: "500",
                          pointerEvents: "auto",
                          stroke: "rgb(255, 255, 255)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2px",
                          transformOrigin: "0px 0px",
                        }}
                      />
                    </svg>
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: "400",
                    pointerEvents: "auto",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgb(255, 255, 255)",
                      borderRadius: "16px",
                      boxShadow:
                        "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
                      fontWeight: "400",
                      overflowX: "hidden",
                      overflowY: "hidden",
                      pointerEvents: "auto",
                      padding: "32px",
                      maxWidth: "400px",
                    }}
                  >
                    <h4
                      style={{
                        color: "rgb(17, 24, 39)",
                        fontSize: "18px",
                        fontWeight: "600",
                        lineHeight: "28px",
                        marginBottom: "16px",
                        pointerEvents: "auto",
                      }}
                    >
                      Trusted Partners
                    </h4>
                    <div
                      style={{
                        display: "grid",
                        fontWeight: "400",
                        gap: "16px",
                        gridTemplate: "none / repeat(3, minmax(0px, 1fr))",
                        pointerEvents: "auto",
                      }}
                    >
                      {["DHL", "FedEx", "UPS", "Maersk", "COSCO", "K+N"].map(
                        (partner, index) => (
                          <div
                            key={index}
                            style={{
                              backgroundColor: "rgb(255, 255, 255)",
                              borderColor: "rgb(243, 244, 246)",
                              borderRadius: "12px",
                              borderWidth: "1px",
                              fontWeight: "400",
                              textAlign: "center",
                              pointerEvents: "auto",
                              padding: "16px",
                            }}
                          >
                            <div
                              style={{
                                color: "rgb(55, 65, 81)",
                                fontSize: "12px",
                                fontWeight: "600",
                                lineHeight: "16px",
                                pointerEvents: "auto",
                              }}
                            >
                              {partner}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            style={{
              backgroundImage:
                "linear-gradient(to right bottom, rgb(249, 250, 251), rgb(243, 244, 246))",
              fontWeight: "400",
              pointerEvents: "auto",
              padding: "80px 0",
            }}
          >
            <div
              style={{
                fontWeight: "400",
                maxWidth: "1280px",
                pointerEvents: "auto",
                margin: "0 auto",
                padding: "0 24px",
              }}
            >
              <div
                style={{
                  fontWeight: "400",
                  marginBottom: "64px",
                  textAlign: "center",
                  pointerEvents: "auto",
                }}
              >
                <h2
                  style={{
                    color: "rgb(17, 24, 39)",
                    fontSize: "36px",
                    fontWeight: "700",
                    lineHeight: "40px",
                    marginBottom: "16px",
                    pointerEvents: "auto",
                  }}
                >
                  Trusted by Businesses Worldwide
                </h2>
                <p
                  style={{
                    color: "rgb(75, 85, 99)",
                    fontSize: "20px",
                    fontWeight: "400",
                    lineHeight: "28px",
                    maxWidth: "768px",
                    pointerEvents: "auto",
                    margin: "0 auto",
                  }}
                >
                  Join thousands of successful importers and exporters who rely
                  on Omport for their international trade needs.
                </p>
              </div>
              <div
                style={{
                  display: "grid",
                  fontWeight: "400",
                  gap: "32px",
                  gridTemplate: "none / repeat(3, minmax(0px, 1fr))",
                  marginBottom: "64px",
                  pointerEvents: "auto",
                }}
              >
                {[
                  {
                    name: "John Davis",
                    title: "CEO, Global Electronics",
                    initials: "JD",
                    bg: "rgb(204, 251, 241)",
                    text: "Omport has revolutionized our import process. The secure escrow system gives us peace of mind, and the supplier verification is top-notch.",
                  },
                  {
                    name: "Sarah Miller",
                    title: "Import Manager, TechCorp",
                    initials: "SM",
                    bg: "rgb(219, 234, 254)",
                    text: "The logistics integration is seamless. We can track our shipments in real-time and the documentation process is completely digital.",
                  },
                  {
                    name: "Mike Kumar",
                    title: "Director, Quality Imports",
                    initials: "MK",
                    bg: "rgb(220, 252, 231)",
                    text: "Outstanding platform for international trade. The quality inspection service saved us from a potential bad deal. Highly recommended!",
                  },
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "rgb(255, 255, 255)",
                      borderColor: "rgb(243, 244, 246)",
                      borderRadius: "12px",
                      borderWidth: "1px",
                      boxShadow:
                        "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                      fontWeight: "400",
                      pointerEvents: "auto",
                      padding: "32px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "400",
                        marginBottom: "16px",
                        pointerEvents: "auto",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          color: "rgb(250, 204, 21)",
                          fontWeight: "400",
                          pointerEvents: "auto",
                        }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="rgb(250, 204, 21)"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{
                              display: "block",
                              fill: "rgb(250, 204, 21)",
                              fontWeight: "400",
                              height: "20px",
                              overflowClipMargin: "content-box",
                              overflowX: "hidden",
                              overflowY: "hidden",
                              stroke: "rgb(250, 204, 21)",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2px",
                              width: "20px",
                              pointerEvents: "auto",
                            }}
                          >
                            <path
                              d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                              style={{
                                display: "inline",
                                fill: "rgb(250, 204, 21)",
                                fontWeight: "400",
                                stroke: "rgb(250, 204, 21)",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2px",
                                transformOrigin: "0px 0px",
                                pointerEvents: "auto",
                              }}
                            />
                          </svg>
                        ))}
                      </div>
                      <span
                        style={{
                          color: "rgb(75, 85, 99)",
                          fontWeight: "500",
                          marginLeft: "8px",
                          pointerEvents: "auto",
                        }}
                      >
                        5.0
                      </span>
                    </div>
                    <p
                      style={{
                        color: "rgb(55, 65, 81)",
                        fontStyle: "italic",
                        fontWeight: "400",
                        marginBottom: "16px",
                        pointerEvents: "auto",
                      }}
                    >
                      "{testimonial.text}"
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "400",
                        pointerEvents: "auto",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: testimonial.bg,
                          borderRadius: "9999px",
                          height: "40px",
                          width: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "600",
                          marginRight: "12px",
                          pointerEvents: "auto",
                        }}
                      >
                        {testimonial.initials}
                      </div>
                      <div
                        style={{
                          fontWeight: "400",
                          pointerEvents: "auto",
                        }}
                      >
                        <div
                          style={{
                            color: "rgb(17, 24, 39)",
                            fontWeight: "600",
                            pointerEvents: "auto",
                          }}
                        >
                          {testimonial.name}
                        </div>
                        <div
                          style={{
                            color: "rgb(75, 85, 99)",
                            fontSize: "14px",
                            fontWeight: "400",
                            lineHeight: "20px",
                            pointerEvents: "auto",
                          }}
                        >
                          {testimonial.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(79, 70, 229), rgb(147, 51, 234), rgb(37, 99, 235))",
              fontWeight: "400",
              pointerEvents: "auto",
              padding: "80px 0",
            }}
          >
            <div
              style={{
                fontWeight: "400",
                maxWidth: "896px",
                textAlign: "center",
                pointerEvents: "auto",
                margin: "0 auto",
                padding: "0 24px",
              }}
            >
              <h2
                style={{
                  color: "rgb(255, 255, 255)",
                  fontSize: "36px",
                  fontWeight: "700",
                  lineHeight: "40px",
                  marginBottom: "24px",
                  pointerEvents: "auto",
                }}
              >
                Ready to Start Trading Globally?
              </h2>
              <p
                style={{
                  color: "rgb(219, 234, 254)",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "28px",
                  maxWidth: "672px",
                  pointerEvents: "auto",
                  margin: "0 auto 40px",
                }}
              >
                Join Omport today and connect with verified suppliers and buyers
                worldwide. Start your international trade journey with
                confidence.
              </p>
              <div
                style={{
                  display: "flex",
                  fontWeight: "400",
                  gap: "16px",
                  justifyContent: "center",
                  pointerEvents: "auto",
                }}
              >
                <button
                  style={{
                    backgroundColor: "rgb(16, 185, 129)",
                    backgroundImage:
                      "linear-gradient(to right, rgb(16, 185, 129), rgb(6, 182, 212))",
                    borderRadius: "8px",
                    boxShadow:
                      "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                    color: "rgb(255, 255, 255)",
                    fontSize: "18px",
                    fontWeight: "600",
                    gap: "8px",
                    height: "40px",
                    lineHeight: "28px",
                    textWrap: "nowrap",
                    transitionDuration: "0.15s",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    whiteSpace: "nowrap",
                    pointerEvents: "auto",
                    borderColor: "rgba(0, 0, 0, 0)",
                    padding: "16px 40px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Start Free Trial
                </button>
                <button
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    boxShadow:
                      "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                    color: "rgb(255, 255, 255)",
                    fontSize: "18px",
                    fontWeight: "600",
                    gap: "8px",
                    height: "40px",
                    lineHeight: "28px",
                    textWrap: "nowrap",
                    transitionDuration: "0.15s",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    whiteSpace: "nowrap",
                    pointerEvents: "auto",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    padding: "16px 40px",
                    border: "1px solid",
                    cursor: "pointer",
                  }}
                >
                  Schedule Demo
                </button>
              </div>
            </div>
          </section>
          <footer
            style={{
              backgroundColor: "rgb(17, 24, 39)",
              color: "rgb(255, 255, 255)",
              fontWeight: "400",
              pointerEvents: "auto",
              padding: "48px 0",
            }}
          >
            <div
              style={{
                fontWeight: "400",
                maxWidth: "1280px",
                pointerEvents: "auto",
                margin: "0 auto",
                padding: "0 24px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  fontWeight: "400",
                  gap: "32px",
                  gridTemplate: "none / repeat(4, minmax(0px, 1fr))",
                  pointerEvents: "auto",
                }}
              >
                <div
                  style={{
                    fontWeight: "400",
                    pointerEvents: "auto",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "400",
                      marginBottom: "16px",
                      pointerEvents: "auto",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        display: "block",
                        color: "rgb(96, 165, 250)",
                        fill: "none",
                        fontWeight: "400",
                        height: "32px",
                        overflowClipMargin: "content-box",
                        overflowX: "hidden",
                        overflowY: "hidden",
                        position: "relative",
                        stroke: "rgb(96, 165, 250)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2px",
                        width: "32px",
                        zIndex: "10",
                        pointerEvents: "auto",
                      }}
                    >
                      <path
                        d="M12 10.189V14"
                        style={{
                          display: "inline",
                          fill: "none",
                          fontWeight: "400",
                          stroke: "rgb(96, 165, 250)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2px",
                          transformOrigin: "0px 0px",
                          pointerEvents: "auto",
                        }}
                      />
                      <path
                        d="M12 2v3"
                        style={{
                          display: "inline",
                          fill: "none",
                          fontWeight: "400",
                          stroke: "rgb(96, 165, 250)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2px",
                          transformOrigin: "0px 0px",
                          pointerEvents: "auto",
                        }}
                      />
                      <path
                        d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"
                        style={{
                          display: "inline",
                          fill: "none",
                          fontWeight: "400",
                          stroke: "rgb(96, 165, 250)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2px",
                          transformOrigin: "0px 0px",
                          pointerEvents: "auto",
                        }}
                      />
                      <path
                        d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"
                        style={{
                          display: "inline",
                          fill: "none",
                          fontWeight: "400",
                          stroke: "rgb(96, 165, 250)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2px",
                          transformOrigin: "0px 0px",
                          pointerEvents: "auto",
                        }}
                      />
                      <path
                        d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
                        style={{
                          display: "inline",
                          fill: "none",
                          fontWeight: "400",
                          stroke: "rgb(96, 165, 250)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2px",
                          transformOrigin: "0px 0px",
                          pointerEvents: "auto",
                        }}
                      />
                    </svg>
                    <span
                      style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        lineHeight: "32px",
                        marginLeft: "8px",
                        pointerEvents: "auto",
                      }}
                    >
                      Omport
                    </span>
                  </div>
                  <p
                    style={{
                      color: "rgb(156, 163, 175)",
                      fontWeight: "400",
                      marginBottom: "16px",
                      pointerEvents: "auto",
                    }}
                  >
                    One Market for Import and Export
                  </p>
                  <p
                    style={{
                      color: "rgb(107, 114, 128)",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "20px",
                      pointerEvents: "auto",
                    }}
                  >
                    Connecting global businesses through secure and reliable
                    international trade solutions.
                  </p>
                </div>
                {[
                  {
                    title: "Platform",
                    links: [
                      "Find Suppliers",
                      "Find Buyers",
                      "Logistics",
                      "Documentation",
                    ],
                  },
                  {
                    title: "Company",
                    links: ["About Us", "Careers", "Press", "Contact"],
                  },
                  {
                    title: "Support",
                    links: [
                      "Help Center",
                      "API Documentation",
                      "Privacy Policy",
                      "Terms of Service",
                    ],
                  },
                ].map((section, index) => (
                  <div
                    key={index}
                    style={{
                      fontWeight: "400",
                      pointerEvents: "auto",
                    }}
                  >
                    <h3
                      style={{
                        fontWeight: "600",
                        marginBottom: "16px",
                        pointerEvents: "auto",
                      }}
                    >
                      {section.title}
                    </h3>
                    <ul
                      style={{
                        color: "rgb(156, 163, 175)",
                        fontWeight: "400",
                        pointerEvents: "auto",
                      }}
                    >
                      {section.links.map((link, linkIndex) => (
                        <li
                          key={linkIndex}
                          style={{
                            fontWeight: "400",
                            transitionDuration: "0.15s",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            pointerEvents: "auto",
                            marginTop: linkIndex > 0 ? "8px" : "0",
                            cursor: "pointer",
                          }}
                        >
                          {link}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div
                style={{
                  borderColor: "rgb(31, 41, 55)",
                  borderTopWidth: "1px",
                  borderWidth: "1px 0px 0px",
                  color: "rgb(107, 114, 128)",
                  fontWeight: "400",
                  marginTop: "32px",
                  paddingTop: "32px",
                  textAlign: "center",
                  pointerEvents: "auto",
                }}
              >
                <p
                  style={{
                    fontWeight: "400",
                    pointerEvents: "auto",
                  }}
                >
                  © 2025 Omport. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
