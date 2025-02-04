function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import * as CoreuiIcons from "@coreui/icons/js";
var warned = {};

var colog = function colog(msg, icon) {
  if (!warned[icon] && process && process.env && process.env.NODE_ENV === "development") {
    warned[icon] = true;
    console.error(msg);
  }
};

var toCamelCase = function toCamelCase(str) {
  return str.replace(/([-_][a-z0-9])/gi, function ($1) {
    return $1.toUpperCase();
  }).replace(/-/gi, "");
}; //component - CoreUI / CIcon


var CIcon = function CIcon(props) {
  var className = props.className,
      name = props.name,
      content = props.content,
      customClasses = props.customClasses,
      size = props.size,
      src = props.src,
      title = props.title,
      use = props.use,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "name", "content", "customClasses", "size", "src", "title", "use"]);

  var _useState = useState(0),
      change = _useState[0],
      setChange = _useState[1];

  useMemo(function () {
    return setChange(change + 1);
  }, [name, JSON.stringify[content]]);
  var iconName = useMemo(function () {
    var iconNameIsKebabCase = name && name.includes("-");
    return iconNameIsKebabCase ? toCamelCase(name) : name;
  }, [change]);
  var titleCode = title ? "<title>" + title + "</title>" : "";
  var code = useMemo(function () {
    if (content) {
      return content;
    } else if (name) {
      if (React.icons) {
        return React.icons[iconName] ? React.icons[iconName] : colog("CIcon component: icon name '" + iconName + "' does not exist in React.icons object. " + "To use icons by 'name' prop you need to make them available globally " + "by adding them to React.icons object. CIcon component docs: https://coreui.io/react/docs/components/CIcon \n", iconName);
      } else if (CoreuiIcons) {
        return CoreuiIcons[iconName] ? CoreuiIcons[iconName] : colog("CIcon component: icon name '" + iconName + "' does not exist in React.icons object. " + "To use icons by 'name' prop you need to make them available globally " + "by adding them to React.icons object. CIcon component docs: https://coreui.io/react/docs/components/CIcon \n", iconName);
      }
    }
  }, [change]);
  var iconCode = useMemo(function () {
    return Array.isArray(code) ? code[1] || code[0] : code;
  }, [change]);

  var scale = function () {
    return Array.isArray(code) && code.length > 1 ? code[0] : "64 64";
  }();

  var viewBox = function () {
    return attributes.viewBox || "0 0 " + scale;
  }();

  var computedSize = function () {
    var addCustom = !size && (attributes.width || attributes.height);
    return size === "custom" || addCustom ? "custom-size" : size;
  }(); //render


  var computedClasses = classNames("c-icon", computedSize && "c-icon-" + computedSize, className);
  var classes = customClasses || computedClasses;
  return /*#__PURE__*/React.createElement(React.Fragment, null, !src && !use && /*#__PURE__*/React.createElement("svg", _extends({}, attributes, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: viewBox,
    className: classes,
    role: "img",
    dangerouslySetInnerHTML: {
      __html: titleCode + iconCode
    }
  })), src && !use && /*#__PURE__*/React.createElement("img", _extends({}, attributes, {
    className: className,
    src: src,
    role: "img"
  })), !src && use && /*#__PURE__*/React.createElement("svg", _extends({}, attributes, {
    xmlns: "http://www.w3.org/2000/svg",
    className: classes,
    role: "img"
  }), /*#__PURE__*/React.createElement("use", {
    href: use
  })));
};

CIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  size: PropTypes.oneOf(["custom", "custom-size", "sm", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"]),
  customClasses: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  src: PropTypes.string,
  title: PropTypes.string,
  use: PropTypes.string
} : {};
export default CIcon;
export var CIconWarn = function CIconWarn(props) {
  colog("@coreui/icons-react: Please use default export since named exports are deprecated");
  return /*#__PURE__*/React.createElement(CIcon, props);
};