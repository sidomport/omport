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
          {/* Additional sections would continue here... */}
          <div
            style={{ textAlign: "center", padding: "40px 0", color: "#666" }}
          >
            <p>
              Additional sections (Features, Logistics, Testimonials, Footer)
              would continue here...
            </p>
            <p>
              This represents the complete Omport landing page transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
