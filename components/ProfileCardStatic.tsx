"use client";

import React from "react";
import "./ProfileCardStatic.css";

interface ProfileCardStaticProps {
  avatarUrl: string;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  onContactClick?: () => void;
}

export default function ProfileCardStatic({
  avatarUrl,
  miniAvatarUrl,
  name = "Rifki",
  title = "Fullstack Web Developer",
  handle = "rifkidocs",
  status = "Available for work",
  contactText = "Contact Me",
  showUserInfo = true,
  onContactClick,
}: ProfileCardStaticProps) {
  const handleContactClick = () => {
    onContactClick?.();
  };

  return (
    <div className="pc-static-card-wrapper">
      <section className="pc-static-card">
        <div className="pc-static-inside">
          <div className="pc-static-avatar-content">
            <img
              className="pc-static-avatar"
              src={avatarUrl}
              alt={`${name} avatar`}
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            {showUserInfo && (
              <div className="pc-static-user-info">
                <div className="pc-static-user-details">
                  <div className="pc-static-mini-avatar">
                    <img
                      src={miniAvatarUrl || avatarUrl}
                      alt={`${name} mini avatar`}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.opacity = "0.5";
                        target.src = avatarUrl;
                      }}
                    />
                  </div>
                  <div className="pc-static-user-text">
                    <div className="pc-static-handle">@{handle}</div>
                    <div className="pc-static-status">{status}</div>
                  </div>
                </div>
                <button
                  className="pc-static-contact-btn"
                  onClick={handleContactClick}
                  style={{ pointerEvents: "auto" }}
                  type="button"
                  aria-label={`Contact ${name}`}
                >
                  {contactText}
                </button>
              </div>
            )}
          </div>
          <div className="pc-static-content">
            <div className="pc-static-details">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
