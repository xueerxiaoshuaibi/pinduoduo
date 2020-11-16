export const wxcore = {
  //获取当前应用的window对象，用于解决跨域问题。
  getTopwindow(mywindow) {
    if (mywindow == window.top) {
      return mywindow;
    }
    try {
      window.top["myTestValue"] = "1";
      return window.top;
    } catch (e) {
      const list = [mywindow];
      while (mywindow !== window.top && mywindow) {
        mywindow = mywindow.parent;
        list.push(mywindow);
      }
      return list[list.length - 2];
    }
  },
};
