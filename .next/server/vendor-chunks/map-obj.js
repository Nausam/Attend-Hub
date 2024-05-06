"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/map-obj";
exports.ids = ["vendor-chunks/map-obj"];
exports.modules = {

/***/ "(rsc)/./node_modules/map-obj/index.js":
/*!***************************************!*\
  !*** ./node_modules/map-obj/index.js ***!
  \***************************************/
/***/ ((module) => {

eval("\nconst isObject = (value)=>typeof value === \"object\" && value !== null;\nconst mapObjectSkip = Symbol(\"skip\");\n// Customized for this use-case\nconst isObjectCustom = (value)=>isObject(value) && !(value instanceof RegExp) && !(value instanceof Error) && !(value instanceof Date);\nconst mapObject = (object, mapper, options, isSeen = new WeakMap())=>{\n    options = {\n        deep: false,\n        target: {},\n        ...options\n    };\n    if (isSeen.has(object)) {\n        return isSeen.get(object);\n    }\n    isSeen.set(object, options.target);\n    const { target } = options;\n    delete options.target;\n    const mapArray = (array)=>array.map((element)=>isObjectCustom(element) ? mapObject(element, mapper, options, isSeen) : element);\n    if (Array.isArray(object)) {\n        return mapArray(object);\n    }\n    for (const [key, value] of Object.entries(object)){\n        const mapResult = mapper(key, value, object);\n        if (mapResult === mapObjectSkip) {\n            continue;\n        }\n        let [newKey, newValue, { shouldRecurse = true } = {}] = mapResult;\n        // Drop `__proto__` keys.\n        if (newKey === \"__proto__\") {\n            continue;\n        }\n        if (options.deep && shouldRecurse && isObjectCustom(newValue)) {\n            newValue = Array.isArray(newValue) ? mapArray(newValue) : mapObject(newValue, mapper, options, isSeen);\n        }\n        target[newKey] = newValue;\n    }\n    return target;\n};\nmodule.exports = (object, mapper, options)=>{\n    if (!isObject(object)) {\n        throw new TypeError(`Expected an object, got \\`${object}\\` (${typeof object})`);\n    }\n    return mapObject(object, mapper, options);\n};\nmodule.exports.mapObjectSkip = mapObjectSkip;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWFwLW9iai9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLE1BQU1BLFdBQVdDLENBQUFBLFFBQVMsT0FBT0EsVUFBVSxZQUFZQSxVQUFVO0FBQ2pFLE1BQU1DLGdCQUFnQkMsT0FBTztBQUU3QiwrQkFBK0I7QUFDL0IsTUFBTUMsaUJBQWlCSCxDQUFBQSxRQUN0QkQsU0FBU0MsVUFDVCxDQUFFQSxDQUFBQSxpQkFBaUJJLE1BQUssS0FDeEIsQ0FBRUosQ0FBQUEsaUJBQWlCSyxLQUFJLEtBQ3ZCLENBQUVMLENBQUFBLGlCQUFpQk0sSUFBRztBQUV2QixNQUFNQyxZQUFZLENBQUNDLFFBQVFDLFFBQVFDLFNBQVNDLFNBQVMsSUFBSUMsU0FBUztJQUNqRUYsVUFBVTtRQUNURyxNQUFNO1FBQ05DLFFBQVEsQ0FBQztRQUNULEdBQUdKLE9BQU87SUFDWDtJQUVBLElBQUlDLE9BQU9JLEdBQUcsQ0FBQ1AsU0FBUztRQUN2QixPQUFPRyxPQUFPSyxHQUFHLENBQUNSO0lBQ25CO0lBRUFHLE9BQU9NLEdBQUcsQ0FBQ1QsUUFBUUUsUUFBUUksTUFBTTtJQUVqQyxNQUFNLEVBQUNBLE1BQU0sRUFBQyxHQUFHSjtJQUNqQixPQUFPQSxRQUFRSSxNQUFNO0lBRXJCLE1BQU1JLFdBQVdDLENBQUFBLFFBQVNBLE1BQU1DLEdBQUcsQ0FBQ0MsQ0FBQUEsVUFBV2xCLGVBQWVrQixXQUFXZCxVQUFVYyxTQUFTWixRQUFRQyxTQUFTQyxVQUFVVTtJQUN2SCxJQUFJQyxNQUFNQyxPQUFPLENBQUNmLFNBQVM7UUFDMUIsT0FBT1UsU0FBU1Y7SUFDakI7SUFFQSxLQUFLLE1BQU0sQ0FBQ2dCLEtBQUt4QixNQUFNLElBQUl5QixPQUFPQyxPQUFPLENBQUNsQixRQUFTO1FBQ2xELE1BQU1tQixZQUFZbEIsT0FBT2UsS0FBS3hCLE9BQU9RO1FBRXJDLElBQUltQixjQUFjMUIsZUFBZTtZQUNoQztRQUNEO1FBRUEsSUFBSSxDQUFDMkIsUUFBUUMsVUFBVSxFQUFDQyxnQkFBZ0IsSUFBSSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0g7UUFFdEQseUJBQXlCO1FBQ3pCLElBQUlDLFdBQVcsYUFBYTtZQUMzQjtRQUNEO1FBRUEsSUFBSWxCLFFBQVFHLElBQUksSUFBSWlCLGlCQUFpQjNCLGVBQWUwQixXQUFXO1lBQzlEQSxXQUFXUCxNQUFNQyxPQUFPLENBQUNNLFlBQ3hCWCxTQUFTVyxZQUNUdEIsVUFBVXNCLFVBQVVwQixRQUFRQyxTQUFTQztRQUN2QztRQUVBRyxNQUFNLENBQUNjLE9BQU8sR0FBR0M7SUFDbEI7SUFFQSxPQUFPZjtBQUNSO0FBRUFpQixPQUFPQyxPQUFPLEdBQUcsQ0FBQ3hCLFFBQVFDLFFBQVFDO0lBQ2pDLElBQUksQ0FBQ1gsU0FBU1MsU0FBUztRQUN0QixNQUFNLElBQUl5QixVQUFVLENBQUMsMEJBQTBCLEVBQUV6QixPQUFPLElBQUksRUFBRSxPQUFPQSxPQUFPLENBQUMsQ0FBQztJQUMvRTtJQUVBLE9BQU9ELFVBQVVDLFFBQVFDLFFBQVFDO0FBQ2xDO0FBRUFxQiw0QkFBNEIsR0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXR0ZW5kLWh1Yi8uL25vZGVfbW9kdWxlcy9tYXAtb2JqL2luZGV4LmpzP2U0ODEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBpc09iamVjdCA9IHZhbHVlID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGw7XG5jb25zdCBtYXBPYmplY3RTa2lwID0gU3ltYm9sKCdza2lwJyk7XG5cbi8vIEN1c3RvbWl6ZWQgZm9yIHRoaXMgdXNlLWNhc2VcbmNvbnN0IGlzT2JqZWN0Q3VzdG9tID0gdmFsdWUgPT5cblx0aXNPYmplY3QodmFsdWUpICYmXG5cdCEodmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApICYmXG5cdCEodmFsdWUgaW5zdGFuY2VvZiBFcnJvcikgJiZcblx0ISh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpO1xuXG5jb25zdCBtYXBPYmplY3QgPSAob2JqZWN0LCBtYXBwZXIsIG9wdGlvbnMsIGlzU2VlbiA9IG5ldyBXZWFrTWFwKCkpID0+IHtcblx0b3B0aW9ucyA9IHtcblx0XHRkZWVwOiBmYWxzZSxcblx0XHR0YXJnZXQ6IHt9LFxuXHRcdC4uLm9wdGlvbnNcblx0fTtcblxuXHRpZiAoaXNTZWVuLmhhcyhvYmplY3QpKSB7XG5cdFx0cmV0dXJuIGlzU2Vlbi5nZXQob2JqZWN0KTtcblx0fVxuXG5cdGlzU2Vlbi5zZXQob2JqZWN0LCBvcHRpb25zLnRhcmdldCk7XG5cblx0Y29uc3Qge3RhcmdldH0gPSBvcHRpb25zO1xuXHRkZWxldGUgb3B0aW9ucy50YXJnZXQ7XG5cblx0Y29uc3QgbWFwQXJyYXkgPSBhcnJheSA9PiBhcnJheS5tYXAoZWxlbWVudCA9PiBpc09iamVjdEN1c3RvbShlbGVtZW50KSA/IG1hcE9iamVjdChlbGVtZW50LCBtYXBwZXIsIG9wdGlvbnMsIGlzU2VlbikgOiBlbGVtZW50KTtcblx0aWYgKEFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuXHRcdHJldHVybiBtYXBBcnJheShvYmplY3QpO1xuXHR9XG5cblx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqZWN0KSkge1xuXHRcdGNvbnN0IG1hcFJlc3VsdCA9IG1hcHBlcihrZXksIHZhbHVlLCBvYmplY3QpO1xuXG5cdFx0aWYgKG1hcFJlc3VsdCA9PT0gbWFwT2JqZWN0U2tpcCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bGV0IFtuZXdLZXksIG5ld1ZhbHVlLCB7c2hvdWxkUmVjdXJzZSA9IHRydWV9ID0ge31dID0gbWFwUmVzdWx0O1xuXG5cdFx0Ly8gRHJvcCBgX19wcm90b19fYCBrZXlzLlxuXHRcdGlmIChuZXdLZXkgPT09ICdfX3Byb3RvX18nKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAob3B0aW9ucy5kZWVwICYmIHNob3VsZFJlY3Vyc2UgJiYgaXNPYmplY3RDdXN0b20obmV3VmFsdWUpKSB7XG5cdFx0XHRuZXdWYWx1ZSA9IEFycmF5LmlzQXJyYXkobmV3VmFsdWUpID9cblx0XHRcdFx0bWFwQXJyYXkobmV3VmFsdWUpIDpcblx0XHRcdFx0bWFwT2JqZWN0KG5ld1ZhbHVlLCBtYXBwZXIsIG9wdGlvbnMsIGlzU2Vlbik7XG5cdFx0fVxuXG5cdFx0dGFyZ2V0W25ld0tleV0gPSBuZXdWYWx1ZTtcblx0fVxuXG5cdHJldHVybiB0YXJnZXQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IChvYmplY3QsIG1hcHBlciwgb3B0aW9ucykgPT4ge1xuXHRpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBhbiBvYmplY3QsIGdvdCBcXGAke29iamVjdH1cXGAgKCR7dHlwZW9mIG9iamVjdH0pYCk7XG5cdH1cblxuXHRyZXR1cm4gbWFwT2JqZWN0KG9iamVjdCwgbWFwcGVyLCBvcHRpb25zKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzLm1hcE9iamVjdFNraXAgPSBtYXBPYmplY3RTa2lwO1xuIl0sIm5hbWVzIjpbImlzT2JqZWN0IiwidmFsdWUiLCJtYXBPYmplY3RTa2lwIiwiU3ltYm9sIiwiaXNPYmplY3RDdXN0b20iLCJSZWdFeHAiLCJFcnJvciIsIkRhdGUiLCJtYXBPYmplY3QiLCJvYmplY3QiLCJtYXBwZXIiLCJvcHRpb25zIiwiaXNTZWVuIiwiV2Vha01hcCIsImRlZXAiLCJ0YXJnZXQiLCJoYXMiLCJnZXQiLCJzZXQiLCJtYXBBcnJheSIsImFycmF5IiwibWFwIiwiZWxlbWVudCIsIkFycmF5IiwiaXNBcnJheSIsImtleSIsIk9iamVjdCIsImVudHJpZXMiLCJtYXBSZXN1bHQiLCJuZXdLZXkiLCJuZXdWYWx1ZSIsInNob3VsZFJlY3Vyc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiVHlwZUVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/map-obj/index.js\n");

/***/ })

};
;