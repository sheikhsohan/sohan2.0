/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "reactPlayerVimeo";
exports.ids = ["reactPlayerVimeo"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-player/lib/players/Vimeo.js":
/*!********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Vimeo.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar Vimeo_exports = {};\n__export(Vimeo_exports, {\n  default: () => Vimeo\n});\nmodule.exports = __toCommonJS(Vimeo_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"react?9fde\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"(ssr)/./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"(ssr)/./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://player.vimeo.com/api/player.js\";\nconst SDK_GLOBAL = \"Vimeo\";\nconst cleanUrl = (url) => {\n  return url.replace(\"/manage/videos\", \"\");\n};\nclass Vimeo extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    // Prevent checking isLoading when URL changes\n    __publicField(this, \"callPlayer\", import_utils.callPlayer);\n    __publicField(this, \"duration\", null);\n    __publicField(this, \"currentTime\", null);\n    __publicField(this, \"secondsLoaded\", null);\n    __publicField(this, \"mute\", () => {\n      this.setMuted(true);\n    });\n    __publicField(this, \"unmute\", () => {\n      this.setMuted(false);\n    });\n    __publicField(this, \"ref\", (container) => {\n      this.container = container;\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n  }\n  load(url) {\n    this.duration = null;\n    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL).then((Vimeo2) => {\n      if (!this.container)\n        return;\n      const { playerOptions, title } = this.props.config;\n      this.player = new Vimeo2.Player(this.container, {\n        url: cleanUrl(url),\n        autoplay: this.props.playing,\n        muted: this.props.muted,\n        loop: this.props.loop,\n        playsinline: this.props.playsinline,\n        controls: this.props.controls,\n        ...playerOptions\n      });\n      this.player.ready().then(() => {\n        const iframe = this.container.querySelector(\"iframe\");\n        iframe.style.width = \"100%\";\n        iframe.style.height = \"100%\";\n        if (title) {\n          iframe.title = title;\n        }\n      }).catch(this.props.onError);\n      this.player.on(\"loaded\", () => {\n        this.props.onReady();\n        this.refreshDuration();\n      });\n      this.player.on(\"play\", () => {\n        this.props.onPlay();\n        this.refreshDuration();\n      });\n      this.player.on(\"pause\", this.props.onPause);\n      this.player.on(\"seeked\", (e) => this.props.onSeek(e.seconds));\n      this.player.on(\"ended\", this.props.onEnded);\n      this.player.on(\"error\", this.props.onError);\n      this.player.on(\"timeupdate\", ({ seconds }) => {\n        this.currentTime = seconds;\n      });\n      this.player.on(\"progress\", ({ seconds }) => {\n        this.secondsLoaded = seconds;\n      });\n      this.player.on(\"bufferstart\", this.props.onBuffer);\n      this.player.on(\"bufferend\", this.props.onBufferEnd);\n      this.player.on(\"playbackratechange\", (e) => this.props.onPlaybackRateChange(e.playbackRate));\n    }, this.props.onError);\n  }\n  refreshDuration() {\n    this.player.getDuration().then((duration) => {\n      this.duration = duration;\n    });\n  }\n  play() {\n    const promise = this.callPlayer(\"play\");\n    if (promise) {\n      promise.catch(this.props.onError);\n    }\n  }\n  pause() {\n    this.callPlayer(\"pause\");\n  }\n  stop() {\n    this.callPlayer(\"unload\");\n  }\n  seekTo(seconds, keepPlaying = true) {\n    this.callPlayer(\"setCurrentTime\", seconds);\n    if (!keepPlaying) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.callPlayer(\"setVolume\", fraction);\n  }\n  setMuted(muted) {\n    this.callPlayer(\"setMuted\", muted);\n  }\n  setLoop(loop) {\n    this.callPlayer(\"setLoop\", loop);\n  }\n  setPlaybackRate(rate) {\n    this.callPlayer(\"setPlaybackRate\", rate);\n  }\n  getDuration() {\n    return this.duration;\n  }\n  getCurrentTime() {\n    return this.currentTime;\n  }\n  getSecondsLoaded() {\n    return this.secondsLoaded;\n  }\n  render() {\n    const { display } = this.props;\n    const style = {\n      width: \"100%\",\n      height: \"100%\",\n      overflow: \"hidden\",\n      display\n    };\n    return /* @__PURE__ */ import_react.default.createElement(\n      \"div\",\n      {\n        key: this.props.url,\n        ref: this.ref,\n        style\n      }\n    );\n  }\n}\n__publicField(Vimeo, \"displayName\", \"Vimeo\");\n__publicField(Vimeo, \"canPlay\", import_patterns.canPlay.vimeo);\n__publicField(Vimeo, \"forceLoad\", true);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi9wbGF5ZXJzL1ZpbWVvLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSw2REFBNkQ7QUFDM0k7QUFDQTtBQUNBLDhCQUE4QixrQ0FBa0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw0RkFBNEY7QUFDekg7QUFDQTtBQUNBO0FBQ0EsbUdBQW1HO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLDhCQUE4QjtBQUN2RztBQUNBO0FBQ0Esb0RBQW9ELGtCQUFrQixhQUFhO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMkJBQTJCLG1CQUFPLENBQUMseUJBQU87QUFDMUMsbUJBQW1CLG1CQUFPLENBQUMsZ0VBQVU7QUFDckMsc0JBQXNCLG1CQUFPLENBQUMsc0VBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHVCQUF1QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsU0FBUztBQUMvQztBQUNBLE9BQU87QUFDUCxvQ0FBb0MsU0FBUztBQUM3QztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2lrbm93LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYXllci9saWIvcGxheWVycy9WaW1lby5qcz9jYTExIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2NyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG52YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19nZXRQcm90b09mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19kZWZOb3JtYWxQcm9wID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcChvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn07XG52YXIgX19jb3B5UHJvcHMgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKGZyb20pKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0bywga2V5KSAmJiBrZXkgIT09IGV4Y2VwdClcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0bztcbn07XG52YXIgX190b0VTTSA9IChtb2QsIGlzTm9kZU1vZGUsIHRhcmdldCkgPT4gKHRhcmdldCA9IG1vZCAhPSBudWxsID8gX19jcmVhdGUoX19nZXRQcm90b09mKG1vZCkpIDoge30sIF9fY29weVByb3BzKFxuICAvLyBJZiB0aGUgaW1wb3J0ZXIgaXMgaW4gbm9kZSBjb21wYXRpYmlsaXR5IG1vZGUgb3IgdGhpcyBpcyBub3QgYW4gRVNNXG4gIC8vIGZpbGUgdGhhdCBoYXMgYmVlbiBjb252ZXJ0ZWQgdG8gYSBDb21tb25KUyBmaWxlIHVzaW5nIGEgQmFiZWwtXG4gIC8vIGNvbXBhdGlibGUgdHJhbnNmb3JtIChpLmUuIFwiX19lc01vZHVsZVwiIGhhcyBub3QgYmVlbiBzZXQpLCB0aGVuIHNldFxuICAvLyBcImRlZmF1bHRcIiB0byB0aGUgQ29tbW9uSlMgXCJtb2R1bGUuZXhwb3J0c1wiIGZvciBub2RlIGNvbXBhdGliaWxpdHkuXG4gIGlzTm9kZU1vZGUgfHwgIW1vZCB8fCAhbW9kLl9fZXNNb2R1bGUgPyBfX2RlZlByb3AodGFyZ2V0LCBcImRlZmF1bHRcIiwgeyB2YWx1ZTogbW9kLCBlbnVtZXJhYmxlOiB0cnVlIH0pIDogdGFyZ2V0LFxuICBtb2RcbikpO1xudmFyIF9fdG9Db21tb25KUyA9IChtb2QpID0+IF9fY29weVByb3BzKF9fZGVmUHJvcCh7fSwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSksIG1vZCk7XG52YXIgX19wdWJsaWNGaWVsZCA9IChvYmosIGtleSwgdmFsdWUpID0+IHtcbiAgX19kZWZOb3JtYWxQcm9wKG9iaiwgdHlwZW9mIGtleSAhPT0gXCJzeW1ib2xcIiA/IGtleSArIFwiXCIgOiBrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcbnZhciBWaW1lb19leHBvcnRzID0ge307XG5fX2V4cG9ydChWaW1lb19leHBvcnRzLCB7XG4gIGRlZmF1bHQ6ICgpID0+IFZpbWVvXG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKFZpbWVvX2V4cG9ydHMpO1xudmFyIGltcG9ydF9yZWFjdCA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBpbXBvcnRfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgaW1wb3J0X3BhdHRlcm5zID0gcmVxdWlyZShcIi4uL3BhdHRlcm5zXCIpO1xuY29uc3QgU0RLX1VSTCA9IFwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL2FwaS9wbGF5ZXIuanNcIjtcbmNvbnN0IFNES19HTE9CQUwgPSBcIlZpbWVvXCI7XG5jb25zdCBjbGVhblVybCA9ICh1cmwpID0+IHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKFwiL21hbmFnZS92aWRlb3NcIiwgXCJcIik7XG59O1xuY2xhc3MgVmltZW8gZXh0ZW5kcyBpbXBvcnRfcmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAvLyBQcmV2ZW50IGNoZWNraW5nIGlzTG9hZGluZyB3aGVuIFVSTCBjaGFuZ2VzXG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImNhbGxQbGF5ZXJcIiwgaW1wb3J0X3V0aWxzLmNhbGxQbGF5ZXIpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJkdXJhdGlvblwiLCBudWxsKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiY3VycmVudFRpbWVcIiwgbnVsbCk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInNlY29uZHNMb2FkZWRcIiwgbnVsbCk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm11dGVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRNdXRlZCh0cnVlKTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwidW5tdXRlXCIsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0TXV0ZWQoZmFsc2UpO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJyZWZcIiwgKGNvbnRhaW5lcikgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5vbk1vdW50ICYmIHRoaXMucHJvcHMub25Nb3VudCh0aGlzKTtcbiAgfVxuICBsb2FkKHVybCkge1xuICAgIHRoaXMuZHVyYXRpb24gPSBudWxsO1xuICAgICgwLCBpbXBvcnRfdXRpbHMuZ2V0U0RLKShTREtfVVJMLCBTREtfR0xPQkFMKS50aGVuKChWaW1lbzIpID0+IHtcbiAgICAgIGlmICghdGhpcy5jb250YWluZXIpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGNvbnN0IHsgcGxheWVyT3B0aW9ucywgdGl0bGUgfSA9IHRoaXMucHJvcHMuY29uZmlnO1xuICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgVmltZW8yLlBsYXllcih0aGlzLmNvbnRhaW5lciwge1xuICAgICAgICB1cmw6IGNsZWFuVXJsKHVybCksXG4gICAgICAgIGF1dG9wbGF5OiB0aGlzLnByb3BzLnBsYXlpbmcsXG4gICAgICAgIG11dGVkOiB0aGlzLnByb3BzLm11dGVkLFxuICAgICAgICBsb29wOiB0aGlzLnByb3BzLmxvb3AsXG4gICAgICAgIHBsYXlzaW5saW5lOiB0aGlzLnByb3BzLnBsYXlzaW5saW5lLFxuICAgICAgICBjb250cm9sczogdGhpcy5wcm9wcy5jb250cm9scyxcbiAgICAgICAgLi4ucGxheWVyT3B0aW9uc1xuICAgICAgfSk7XG4gICAgICB0aGlzLnBsYXllci5yZWFkeSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBpZnJhbWUgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lXCIpO1xuICAgICAgICBpZnJhbWUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgaWZyYW1lLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICBpZnJhbWUudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2godGhpcy5wcm9wcy5vbkVycm9yKTtcbiAgICAgIHRoaXMucGxheWVyLm9uKFwibG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJlYWR5KCk7XG4gICAgICAgIHRoaXMucmVmcmVzaER1cmF0aW9uKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucGxheWVyLm9uKFwicGxheVwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25QbGF5KCk7XG4gICAgICAgIHRoaXMucmVmcmVzaER1cmF0aW9uKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucGxheWVyLm9uKFwicGF1c2VcIiwgdGhpcy5wcm9wcy5vblBhdXNlKTtcbiAgICAgIHRoaXMucGxheWVyLm9uKFwic2Vla2VkXCIsIChlKSA9PiB0aGlzLnByb3BzLm9uU2VlayhlLnNlY29uZHMpKTtcbiAgICAgIHRoaXMucGxheWVyLm9uKFwiZW5kZWRcIiwgdGhpcy5wcm9wcy5vbkVuZGVkKTtcbiAgICAgIHRoaXMucGxheWVyLm9uKFwiZXJyb3JcIiwgdGhpcy5wcm9wcy5vbkVycm9yKTtcbiAgICAgIHRoaXMucGxheWVyLm9uKFwidGltZXVwZGF0ZVwiLCAoeyBzZWNvbmRzIH0pID0+IHtcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHNlY29uZHM7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucGxheWVyLm9uKFwicHJvZ3Jlc3NcIiwgKHsgc2Vjb25kcyB9KSA9PiB7XG4gICAgICAgIHRoaXMuc2Vjb25kc0xvYWRlZCA9IHNlY29uZHM7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucGxheWVyLm9uKFwiYnVmZmVyc3RhcnRcIiwgdGhpcy5wcm9wcy5vbkJ1ZmZlcik7XG4gICAgICB0aGlzLnBsYXllci5vbihcImJ1ZmZlcmVuZFwiLCB0aGlzLnByb3BzLm9uQnVmZmVyRW5kKTtcbiAgICAgIHRoaXMucGxheWVyLm9uKFwicGxheWJhY2tyYXRlY2hhbmdlXCIsIChlKSA9PiB0aGlzLnByb3BzLm9uUGxheWJhY2tSYXRlQ2hhbmdlKGUucGxheWJhY2tSYXRlKSk7XG4gICAgfSwgdGhpcy5wcm9wcy5vbkVycm9yKTtcbiAgfVxuICByZWZyZXNoRHVyYXRpb24oKSB7XG4gICAgdGhpcy5wbGF5ZXIuZ2V0RHVyYXRpb24oKS50aGVuKChkdXJhdGlvbikgPT4ge1xuICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIH0pO1xuICB9XG4gIHBsYXkoKSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuY2FsbFBsYXllcihcInBsYXlcIik7XG4gICAgaWYgKHByb21pc2UpIHtcbiAgICAgIHByb21pc2UuY2F0Y2godGhpcy5wcm9wcy5vbkVycm9yKTtcbiAgICB9XG4gIH1cbiAgcGF1c2UoKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwicGF1c2VcIik7XG4gIH1cbiAgc3RvcCgpIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJ1bmxvYWRcIik7XG4gIH1cbiAgc2Vla1RvKHNlY29uZHMsIGtlZXBQbGF5aW5nID0gdHJ1ZSkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInNldEN1cnJlbnRUaW1lXCIsIHNlY29uZHMpO1xuICAgIGlmICgha2VlcFBsYXlpbmcpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICB9XG4gIH1cbiAgc2V0Vm9sdW1lKGZyYWN0aW9uKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwic2V0Vm9sdW1lXCIsIGZyYWN0aW9uKTtcbiAgfVxuICBzZXRNdXRlZChtdXRlZCkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInNldE11dGVkXCIsIG11dGVkKTtcbiAgfVxuICBzZXRMb29wKGxvb3ApIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJzZXRMb29wXCIsIGxvb3ApO1xuICB9XG4gIHNldFBsYXliYWNrUmF0ZShyYXRlKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwic2V0UGxheWJhY2tSYXRlXCIsIHJhdGUpO1xuICB9XG4gIGdldER1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmR1cmF0aW9uO1xuICB9XG4gIGdldEN1cnJlbnRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRUaW1lO1xuICB9XG4gIGdldFNlY29uZHNMb2FkZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Vjb25kc0xvYWRlZDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkaXNwbGF5IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgZGlzcGxheVxuICAgIH07XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAga2V5OiB0aGlzLnByb3BzLnVybCxcbiAgICAgICAgcmVmOiB0aGlzLnJlZixcbiAgICAgICAgc3R5bGVcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG5fX3B1YmxpY0ZpZWxkKFZpbWVvLCBcImRpc3BsYXlOYW1lXCIsIFwiVmltZW9cIik7XG5fX3B1YmxpY0ZpZWxkKFZpbWVvLCBcImNhblBsYXlcIiwgaW1wb3J0X3BhdHRlcm5zLmNhblBsYXkudmltZW8pO1xuX19wdWJsaWNGaWVsZChWaW1lbywgXCJmb3JjZUxvYWRcIiwgdHJ1ZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-player/lib/players/Vimeo.js\n");

/***/ })

};
;