let size: number = 0;

const scrollBarSize = () => {
  if (window && window.document && window.document.createElement && !size) {
    const testDiv = document.createElement("div");

    testDiv.style.overflow = "scroll";
    testDiv.style.position = "absolute";
    testDiv.style.top = "-9999px";
    testDiv.style.width = "25px";
    testDiv.style.height = "25px";

    document.body.appendChild(testDiv);
    size = testDiv.offsetWidth - testDiv.clientWidth;
    document.body.removeChild(testDiv);
  }

  return size;
};

export default scrollBarSize;
