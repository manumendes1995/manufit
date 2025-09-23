import React, { useEffect, useRef, useState } from "react";
import * as poseDetection from "@tensorflow-models/pose-detection";
import "@tensorflow/tfjs-backend-webgl";

export default function CameraIA() {
  const videoRef = useRef(null);
  const [feedback, setFeedback] = useState("A iniciar...");

  useEffect(() => {
    async function init() {
      try {
        // Ativar câmara
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        // Criar modelo
        const detector = await poseDetection.createDetector(
          poseDetection.SupportedModels.MoveNet,
          { modelType: "lightning" }
        );

        setInterval(async () => {
          if (videoRef.current) {
            const poses = await detector.estimatePoses(videoRef.current);
            if (poses.length > 0) {
              const keypoints = poses[0].keypoints;
              const ombroEsq = keypoints.find((k) => k.name === "left_shoulder");
              const ombroDir = keypoints.find((k) => k.name === "right_shoulder");
              const quadrilEsq = keypoints.find((k) => k.name === "left_hip");
              const quadrilDir = keypoints.find((k) => k.name === "right_hip");

              if (ombroEsq && ombroDir && quadrilEsq && quadrilDir) {
                const inclinacao =
                  Math.abs(ombroEsq.y - ombroDir.y) +
                  Math.abs(quadrilEsq.y - quadrilDir.y);

                if (inclinacao < 40) {
                  setFeedback("✅ Costas direitas");
                } else {
                  setFeedback("⚠️ Ajusta postura: estás a inclinar o tronco");
                }
              }
            }
          }
        }, 1500);
      } catch (err) {
        setFeedback("❌ Não foi possível aceder à câmara.");
        console.error(err);
      }
    }

    init();
  }, []);

  return (
    <section id="camera" className="panel">
      <h2>Câmara IA — Correção Postural</h2>
      <p className="note">
        A câmara está ativa (imagem não é exibida). Feedback em tempo real:
      </p>
      <p style={{ fontWeight: "bold", marginTop: "1rem" }}>{feedback}</p>
      {/* Vídeo escondido (apenas input para a IA) */}
      <video ref={videoRef} autoPlay playsInline muted hidden></video>
    </section>
  );
}
