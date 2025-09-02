import { Link } from "react-router";

function NotFound() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #1f1c2c, #928dab)",
      color: "white",
      textAlign: "center",
      fontFamily: "'Poppins', sans-serif",
    },
    glitch: {
      fontSize: "10rem",
      fontWeight: "900",
      position: "relative",
      color: "#fff",
      letterSpacing: "5px",
      animation: "flicker 2s infinite",
    },
    message: {
      fontSize: "1.5rem",
      margin: "20px 0",
    },
    button: {
      display: "inline-block",
      marginTop: "15px",
      padding: "12px 25px",
      background: "#ff4b2b",
      color: "white",
      fontSize: "1rem",
      fontWeight: "bold",
      textDecoration: "none",
      borderRadius: "30px",
      transition: "all 0.3s ease-in-out",
    },
  };

  return (
    <div style={styles.container}>
      <h1 className="glitch" data-text="404" style={styles.glitch}>
        404
      </h1>
      <p style={styles.message}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" style={styles.button}>
        Go Back Home
      </Link>

      {/* 🔥 Animation CSS inside a <style> tag */}
      <style>
        {`
          @keyframes glitch-effect {
            0% { clip: rect(44px, 9999px, 56px, 0); }
            10% { clip: rect(12px, 9999px, 18px, 0); }
            20% { clip: rect(85px, 9999px, 90px, 0); }
            30% { clip: rect(24px, 9999px, 30px, 0); }
            40% { clip: rect(60px, 9999px, 68px, 0); }
            50% { clip: rect(10px, 9999px, 14px, 0); }
            60% { clip: rect(70px, 9999px, 80px, 0); }
            70% { clip: rect(40px, 9999px, 44px, 0); }
            80% { clip: rect(20px, 9999px, 24px, 0); }
            90% { clip: rect(50px, 9999px, 60px, 0); }
            100% { clip: rect(0, 9999px, 6px, 0); }
          }

          @keyframes flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
            20%, 24%, 55% { opacity: 0; }
          }

          .glitch::before,
          .glitch::after {
            content: attr(data-text);
            position: absolute;
            left: 0;
            width: 100%;
            overflow: hidden;
            color: #f00;
            clip: rect(0, 900px, 0, 0);
            animation: glitch-effect 3s infinite linear alternate-reverse;
          }

          .glitch::after {
            color: #0ff;
            animation-delay: 1.5s;
          }

          a:hover {
            background: #ff416c !important;
            transform: scale(1.1);
            box-shadow: 0px 0px 20px rgba(255, 65, 108, 0.7);
          }
        `}
      </style>
    </div>
  );
}

export default NotFound;
