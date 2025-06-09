import { Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa"; 

export const ProjectCard = ({ title, description, imgUrl, gitUrl }) => {
  return (
    <Col size={10} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {gitUrl && (
            <div style={{ marginTop: "10px" }}>
              <a
                href={gitUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: "500",
                  background: "#333",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  marginTop: "8px",
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#555")}
                onMouseLeave={(e) => (e.target.style.background = "#333")}
              >
                <FaGithub size={20} />
                View on GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};