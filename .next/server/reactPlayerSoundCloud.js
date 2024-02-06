/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "reactPlayerSoundCloud";
exports.ids = ["reactPlayerSoundCloud"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-player/lib/players/SoundCloud.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-player/lib/players/SoundCloud.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar SoundCloud_exports = {};\n__export(SoundCloud_exports, {\n  default: () => SoundCloud\n});\nmodule.exports = __toCommonJS(SoundCloud_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"react?9fde\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"(ssr)/./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"(ssr)/./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://w.soundcloud.com/player/api.js\";\nconst SDK_GLOBAL = \"SC\";\nclass SoundCloud extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    __publicField(this, \"callPlayer\", import_utils.callPlayer);\n    __publicField(this, \"duration\", null);\n    __publicField(this, \"currentTime\", null);\n    __publicField(this, \"fractionLoaded\", null);\n    __publicField(this, \"mute\", () => {\n      this.setVolume(0);\n    });\n    __publicField(this, \"unmute\", () => {\n      if (this.props.volume !== null) {\n        this.setVolume(this.props.volume);\n      }\n    });\n    __publicField(this, \"ref\", (iframe) => {\n      this.iframe = iframe;\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n  }\n  load(url, isReady) {\n    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL).then((SC) => {\n      if (!this.iframe)\n        return;\n      const { PLAY, PLAY_PROGRESS, PAUSE, FINISH, ERROR } = SC.Widget.Events;\n      if (!isReady) {\n        this.player = SC.Widget(this.iframe);\n        this.player.bind(PLAY, this.props.onPlay);\n        this.player.bind(PAUSE, () => {\n          const remaining = this.duration - this.currentTime;\n          if (remaining < 0.05) {\n            return;\n          }\n          this.props.onPause();\n        });\n        this.player.bind(PLAY_PROGRESS, (e) => {\n          this.currentTime = e.currentPosition / 1e3;\n          this.fractionLoaded = e.loadedProgress;\n        });\n        this.player.bind(FINISH, () => this.props.onEnded());\n        this.player.bind(ERROR, (e) => this.props.onError(e));\n      }\n      this.player.load(url, {\n        ...this.props.config.options,\n        callback: () => {\n          this.player.getDuration((duration) => {\n            this.duration = duration / 1e3;\n            this.props.onReady();\n          });\n        }\n      });\n    });\n  }\n  play() {\n    this.callPlayer(\"play\");\n  }\n  pause() {\n    this.callPlayer(\"pause\");\n  }\n  stop() {\n  }\n  seekTo(seconds, keepPlaying = true) {\n    this.callPlayer(\"seekTo\", seconds * 1e3);\n    if (!keepPlaying) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.callPlayer(\"setVolume\", fraction * 100);\n  }\n  getDuration() {\n    return this.duration;\n  }\n  getCurrentTime() {\n    return this.currentTime;\n  }\n  getSecondsLoaded() {\n    return this.fractionLoaded * this.duration;\n  }\n  render() {\n    const { display } = this.props;\n    const style = {\n      width: \"100%\",\n      height: \"100%\",\n      display\n    };\n    return /* @__PURE__ */ import_react.default.createElement(\n      \"iframe\",\n      {\n        ref: this.ref,\n        src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(this.props.url)}`,\n        style,\n        frameBorder: 0,\n        allow: \"autoplay\"\n      }\n    );\n  }\n}\n__publicField(SoundCloud, \"displayName\", \"SoundCloud\");\n__publicField(SoundCloud, \"canPlay\", import_patterns.canPlay.soundcloud);\n__publicField(SoundCloud, \"loopOnEnded\", true);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi9wbGF5ZXJzL1NvdW5kQ2xvdWQuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLDZEQUE2RDtBQUMzSTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRGQUE0RjtBQUN6SDtBQUNBO0FBQ0E7QUFDQSxtR0FBbUc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsOEJBQThCO0FBQ3ZHO0FBQ0E7QUFDQSxvREFBb0Qsa0JBQWtCLGFBQWE7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQyx5QkFBTztBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyxnRUFBVTtBQUNyQyxzQkFBc0IsbUJBQU8sQ0FBQyxzRUFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNENBQTRDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsbUNBQW1DO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWtub3ctcmVhY3QvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi9wbGF5ZXJzL1NvdW5kQ2xvdWQuanM/ODU1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9fZ2V0UHJvdG9PZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fZGVmTm9ybWFsUHJvcCA9IChvYmosIGtleSwgdmFsdWUpID0+IGtleSBpbiBvYmogPyBfX2RlZlByb3Aob2JqLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWUgfSkgOiBvYmpba2V5XSA9IHZhbHVlO1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9FU00gPSAobW9kLCBpc05vZGVNb2RlLCB0YXJnZXQpID0+ICh0YXJnZXQgPSBtb2QgIT0gbnVsbCA/IF9fY3JlYXRlKF9fZ2V0UHJvdG9PZihtb2QpKSA6IHt9LCBfX2NvcHlQcm9wcyhcbiAgLy8gSWYgdGhlIGltcG9ydGVyIGlzIGluIG5vZGUgY29tcGF0aWJpbGl0eSBtb2RlIG9yIHRoaXMgaXMgbm90IGFuIEVTTVxuICAvLyBmaWxlIHRoYXQgaGFzIGJlZW4gY29udmVydGVkIHRvIGEgQ29tbW9uSlMgZmlsZSB1c2luZyBhIEJhYmVsLVxuICAvLyBjb21wYXRpYmxlIHRyYW5zZm9ybSAoaS5lLiBcIl9fZXNNb2R1bGVcIiBoYXMgbm90IGJlZW4gc2V0KSwgdGhlbiBzZXRcbiAgLy8gXCJkZWZhdWx0XCIgdG8gdGhlIENvbW1vbkpTIFwibW9kdWxlLmV4cG9ydHNcIiBmb3Igbm9kZSBjb21wYXRpYmlsaXR5LlxuICBpc05vZGVNb2RlIHx8ICFtb2QgfHwgIW1vZC5fX2VzTW9kdWxlID8gX19kZWZQcm9wKHRhcmdldCwgXCJkZWZhdWx0XCIsIHsgdmFsdWU6IG1vZCwgZW51bWVyYWJsZTogdHJ1ZSB9KSA6IHRhcmdldCxcbiAgbW9kXG4pKTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xudmFyIF9fcHVibGljRmllbGQgPSAob2JqLCBrZXksIHZhbHVlKSA9PiB7XG4gIF9fZGVmTm9ybWFsUHJvcChvYmosIHR5cGVvZiBrZXkgIT09IFwic3ltYm9sXCIgPyBrZXkgKyBcIlwiIDoga2V5LCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG52YXIgU291bmRDbG91ZF9leHBvcnRzID0ge307XG5fX2V4cG9ydChTb3VuZENsb3VkX2V4cG9ydHMsIHtcbiAgZGVmYXVsdDogKCkgPT4gU291bmRDbG91ZFxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fdG9Db21tb25KUyhTb3VuZENsb3VkX2V4cG9ydHMpO1xudmFyIGltcG9ydF9yZWFjdCA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBpbXBvcnRfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgaW1wb3J0X3BhdHRlcm5zID0gcmVxdWlyZShcIi4uL3BhdHRlcm5zXCIpO1xuY29uc3QgU0RLX1VSTCA9IFwiaHR0cHM6Ly93LnNvdW5kY2xvdWQuY29tL3BsYXllci9hcGkuanNcIjtcbmNvbnN0IFNES19HTE9CQUwgPSBcIlNDXCI7XG5jbGFzcyBTb3VuZENsb3VkIGV4dGVuZHMgaW1wb3J0X3JlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImNhbGxQbGF5ZXJcIiwgaW1wb3J0X3V0aWxzLmNhbGxQbGF5ZXIpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJkdXJhdGlvblwiLCBudWxsKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiY3VycmVudFRpbWVcIiwgbnVsbCk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImZyYWN0aW9uTG9hZGVkXCIsIG51bGwpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJtdXRlXCIsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0Vm9sdW1lKDApO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJ1bm11dGVcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMudm9sdW1lICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0Vm9sdW1lKHRoaXMucHJvcHMudm9sdW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwicmVmXCIsIChpZnJhbWUpID0+IHtcbiAgICAgIHRoaXMuaWZyYW1lID0gaWZyYW1lO1xuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMub25Nb3VudCAmJiB0aGlzLnByb3BzLm9uTW91bnQodGhpcyk7XG4gIH1cbiAgbG9hZCh1cmwsIGlzUmVhZHkpIHtcbiAgICAoMCwgaW1wb3J0X3V0aWxzLmdldFNESykoU0RLX1VSTCwgU0RLX0dMT0JBTCkudGhlbigoU0MpID0+IHtcbiAgICAgIGlmICghdGhpcy5pZnJhbWUpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGNvbnN0IHsgUExBWSwgUExBWV9QUk9HUkVTUywgUEFVU0UsIEZJTklTSCwgRVJST1IgfSA9IFNDLldpZGdldC5FdmVudHM7XG4gICAgICBpZiAoIWlzUmVhZHkpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBTQy5XaWRnZXQodGhpcy5pZnJhbWUpO1xuICAgICAgICB0aGlzLnBsYXllci5iaW5kKFBMQVksIHRoaXMucHJvcHMub25QbGF5KTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuYmluZChQQVVTRSwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlbWFpbmluZyA9IHRoaXMuZHVyYXRpb24gLSB0aGlzLmN1cnJlbnRUaW1lO1xuICAgICAgICAgIGlmIChyZW1haW5pbmcgPCAwLjA1KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucHJvcHMub25QYXVzZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuYmluZChQTEFZX1BST0dSRVNTLCAoZSkgPT4ge1xuICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBlLmN1cnJlbnRQb3NpdGlvbiAvIDFlMztcbiAgICAgICAgICB0aGlzLmZyYWN0aW9uTG9hZGVkID0gZS5sb2FkZWRQcm9ncmVzcztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGxheWVyLmJpbmQoRklOSVNILCAoKSA9PiB0aGlzLnByb3BzLm9uRW5kZWQoKSk7XG4gICAgICAgIHRoaXMucGxheWVyLmJpbmQoRVJST1IsIChlKSA9PiB0aGlzLnByb3BzLm9uRXJyb3IoZSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5wbGF5ZXIubG9hZCh1cmwsIHtcbiAgICAgICAgLi4udGhpcy5wcm9wcy5jb25maWcub3B0aW9ucyxcbiAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnBsYXllci5nZXREdXJhdGlvbigoZHVyYXRpb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbiAvIDFlMztcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25SZWFkeSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBwbGF5KCkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInBsYXlcIik7XG4gIH1cbiAgcGF1c2UoKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwicGF1c2VcIik7XG4gIH1cbiAgc3RvcCgpIHtcbiAgfVxuICBzZWVrVG8oc2Vjb25kcywga2VlcFBsYXlpbmcgPSB0cnVlKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwic2Vla1RvXCIsIHNlY29uZHMgKiAxZTMpO1xuICAgIGlmICgha2VlcFBsYXlpbmcpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICB9XG4gIH1cbiAgc2V0Vm9sdW1lKGZyYWN0aW9uKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwic2V0Vm9sdW1lXCIsIGZyYWN0aW9uICogMTAwKTtcbiAgfVxuICBnZXREdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kdXJhdGlvbjtcbiAgfVxuICBnZXRDdXJyZW50VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VGltZTtcbiAgfVxuICBnZXRTZWNvbmRzTG9hZGVkKCkge1xuICAgIHJldHVybiB0aGlzLmZyYWN0aW9uTG9hZGVkICogdGhpcy5kdXJhdGlvbjtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkaXNwbGF5IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIGRpc3BsYXlcbiAgICB9O1xuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiaWZyYW1lXCIsXG4gICAgICB7XG4gICAgICAgIHJlZjogdGhpcy5yZWYsXG4gICAgICAgIHNyYzogYGh0dHBzOi8vdy5zb3VuZGNsb3VkLmNvbS9wbGF5ZXIvP3VybD0ke2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLnByb3BzLnVybCl9YCxcbiAgICAgICAgc3R5bGUsXG4gICAgICAgIGZyYW1lQm9yZGVyOiAwLFxuICAgICAgICBhbGxvdzogXCJhdXRvcGxheVwiXG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuX19wdWJsaWNGaWVsZChTb3VuZENsb3VkLCBcImRpc3BsYXlOYW1lXCIsIFwiU291bmRDbG91ZFwiKTtcbl9fcHVibGljRmllbGQoU291bmRDbG91ZCwgXCJjYW5QbGF5XCIsIGltcG9ydF9wYXR0ZXJucy5jYW5QbGF5LnNvdW5kY2xvdWQpO1xuX19wdWJsaWNGaWVsZChTb3VuZENsb3VkLCBcImxvb3BPbkVuZGVkXCIsIHRydWUpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-player/lib/players/SoundCloud.js\n");

/***/ })

};
;