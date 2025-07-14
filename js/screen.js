(function () {
  const minWidth = 1280;
  const minHeight = 720;
  const currentPath = window.location.pathname;
  const isOnMobilePage = currentPath.includes("index-mobile");

  let resizeTimeout;

  function checkRedirect() {
    const isSmallScreen = window.innerWidth < minWidth || window.innerHeight < minHeight;

    // Redirect to mobile if screen is too small and we're not already there
    if (isSmallScreen && !isOnMobilePage) {
      window.location.href = "index-mobile.html";
    }

    // Redirect to desktop if screen is large enough and we're currently on mobile
    if (!isSmallScreen && isOnMobilePage) {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        window.location.href = "index.html"; // ✅ Hard redirect back to desktop
      }, 200); // Delay ensures resize has fully occurred
    }
  }

  window.addEventListener("load", checkRedirect);
  window.addEventListener("resize", checkRedirect);
})();
