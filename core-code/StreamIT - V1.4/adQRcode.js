.streamit-ad-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0);
}

.streamit-ad-layer img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border: none;
}

.streamit-ad-layer.fullscreen01 {
  background-color: rgba(0, 0, 0, 0);
}

.streamit-ad-layer.fullscreen02 {
  background-color: rgba(0, 0, 0, 0);
}

.streamit-ad-layer.lowerthird01 {
  background-color: rgba(0, 0, 0, 0);
}

.streamit-ad-layer.lowerthird02 {
  background-color: rgba(0, 0, 0, 0);
}

.streamit-ad-layer.bottomleft01 {
  background-color: rgba(0, 0, 0, 0);
}

.qr-code {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 10px;
  z-index: 10000;
}

.qr-code img {
  width: 100px;
  height: 100px;
}

@keyframes ad-cycle {
  0% { opacity: 1; }
  16.666% { opacity: 1; }
  20% { opacity: 0; }
  80% { opacity: 0; }
  83.333% { opacity: 1; }
  100% { opacity: 1; }
}

.streamit-ad-layer img {
  animation-name: ad-cycle;
  animation-duration: 50s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.streamit-ad-layer.fullscreen01 img {
  animation-delay: 0s;
}

.streamit-ad-layer.fullscreen02 img {
  animation-delay: 10s;
}

.streamit-ad-layer.lowerthird01 img {
  animation-delay: 20s;
}

.streamit-ad-layer.lowerthird02 img {
  animation-delay: 30s;
}

.streamit-ad-layer.bottomleft01 img {
  animation-delay: 40s;
}
