import { useState } from "react";
import "../styles/hero.css";

export default function Hero() {

  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {

    if (!url) return;

    setLoading(true);
    setShortUrl("");

    try {

      const response = await fetch(
        "https://scalable-url-shortening-service.onrender.com/api/url/shorten",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            originalUrl: url
          })
        }
      );

      const data = await response.json();

      console.log(data);

      // show full short URL string
      setShortUrl(data.shortUrl);

    } catch (error) {
      console.error("Error shortening URL", error);
    }

    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
  };

  return (
    <section className="hero">

      <h1>Build stronger digital connections</h1>

      <p>
        Use our URL shortener, QR Codes, and landing pages to engage your
        audience and connect them to the right information.
      </p>

      <div className="card">

        <div className="tabs">
          <button className="active">🔗 Short Link</button>
          <button>QR Code</button>
        </div>

        <div className="card-content">

          <h2>Shorten a long link</h2>
          <p className="sub">No credit card required.</p>

          <label>Paste your long link here</label>

          <input
            type="text"
            placeholder="https://example.com/my-long-url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <button
            className="cta"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Generating..." : "Get your link for free →"}
          </button>

          {/* Result appears only after response */}

          {shortUrl && (

            <div className="result-box">

              <p className="result-label">Your shortened URL</p>

              <div className="result-row">

                <a
                  href={shortUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="short-link"
                >
                  {shortUrl}
                </a>

                <button
                  className="copy-btn"
                  onClick={copyToClipboard}
                >
                  Copy
                </button>

              </div>

            </div>

          )}

        </div>
      </div>

      <div className="plan">
        <p>Your free plan includes:</p>

        <div className="features">
          <span>✔ more than 50k+ short links/month</span>
          <span>✔ hassle free url/month</span>
          <span>✔ Unlimited link clicks</span>
        </div>

      </div>

    </section>
  );
}