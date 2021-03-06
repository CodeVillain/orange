require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _viewsHeaderView = require('../views/HeaderView');

var _viewsHeaderView2 = _interopRequireDefault(_viewsHeaderView);

var HeaderController = (function () {
	function HeaderController(container) {
		_classCallCheck(this, HeaderController);

		this.view = new _viewsHeaderView2['default'](container);

		this.render();
	}

	_createClass(HeaderController, [{
		key: 'render',
		value: function render() {
			return this.view.render();
		}
	}]);

	return HeaderController;
})();

exports['default'] = HeaderController;
module.exports = exports['default'];

},{"../views/HeaderView":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MessagesController = function MessagesController() {
	_classCallCheck(this, MessagesController);
};

exports["default"] = MessagesController;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _controllersHeaderController = require('../controllers/HeaderController');

var _controllersHeaderController2 = _interopRequireDefault(_controllersHeaderController);

var _controllersMessagesController = require('../controllers/MessagesController');

var _controllersMessagesController2 = _interopRequireDefault(_controllersMessagesController);

var Router = (function () {
	function Router(container) {
		_classCallCheck(this, Router);

		this.container = container;
		this.content = null;
	}

	_createClass(Router, [{
		key: 'run',
		value: function run() {
			this.render();
		}
	}, {
		key: 'render',
		value: function render() {
			new _controllersHeaderController2['default'](this.container);

			this.content = document.createElement('div');
			this.content.id = 'app-content';
			this.container.appendChild(this.content);

			this.content.innerHTML = '\n\t\t\t<p>\n\t\t\t\tI R Router Content!\n\t\t\t</p>\n\t\t';
		}
	}]);

	return Router;
})();

exports['default'] = Router;
module.exports = exports['default'];

},{"../controllers/HeaderController":1,"../controllers/MessagesController":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var HeaderView = (function () {
	function HeaderView(container) {
		_classCallCheck(this, HeaderView);

		this.container = container;
		this.content = null;
	}

	_createClass(HeaderView, [{
		key: 'render',
		value: function render() {

			this.content = '\n\t\t\t<header id="header">\n\t\t\t\tI R Header!\n\t\t\t</header>\n\t\t';

			this.container.insertAdjacentHTML('afterbegin', this.content);
		}
	}]);

	return HeaderView;
})();

exports['default'] = HeaderView;
module.exports = exports['default'];

},{}],"start":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = start;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _routerRouter = require('./router/router');

var _routerRouter2 = _interopRequireDefault(_routerRouter);

function start() {
	var router = new _routerRouter2['default'](document.getElementById('app'));
	router.run();
}

module.exports = exports['default'];

},{"./router/router":3}]},{},[1,2,"start",3,4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvdmFyL3d3dy9odG1sL29yYW5nZS9zcmMvYXBwL2NvbnRyb2xsZXJzL0hlYWRlckNvbnRyb2xsZXIuanMiLCIvdmFyL3d3dy9odG1sL29yYW5nZS9zcmMvYXBwL2NvbnRyb2xsZXJzL01lc3NhZ2VzQ29udHJvbGxlci5qcyIsIi92YXIvd3d3L2h0bWwvb3JhbmdlL3NyYy9hcHAvcm91dGVyL3JvdXRlci5qcyIsIi92YXIvd3d3L2h0bWwvb3JhbmdlL3NyYy9hcHAvdmlld3MvSGVhZGVyVmlldy5qcyIsIi92YXIvd3d3L2h0bWwvb3JhbmdlL3NyYy9hcHAvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OzsrQkNBaUIscUJBQXFCOzs7O0lBRWpCLGdCQUFnQjtBQUN4QixVQURRLGdCQUFnQixDQUN2QixTQUFTLEVBQUU7d0JBREosZ0JBQWdCOztBQUVuQyxNQUFJLENBQUMsSUFBSSxHQUFHLGlDQUFTLFNBQVMsQ0FBQyxDQUFDOztBQUVoQyxNQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7RUFDZDs7Y0FMbUIsZ0JBQWdCOztTQU83QixrQkFBRztBQUNULFVBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztHQUMxQjs7O1FBVG1CLGdCQUFnQjs7O3FCQUFoQixnQkFBZ0I7Ozs7Ozs7Ozs7OztJQ0ZoQixrQkFBa0IsR0FDMUIsU0FEUSxrQkFBa0IsR0FDdkI7dUJBREssa0JBQWtCO0NBR3JDOztxQkFIbUIsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7OzJDQ0FwQixpQ0FBaUM7Ozs7NkNBQy9CLG1DQUFtQzs7OztJQUVuQyxNQUFNO0FBQ2QsVUFEUSxNQUFNLENBQ2IsU0FBUyxFQUFFO3dCQURKLE1BQU07O0FBRXpCLE1BQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzNCLE1BQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0VBQ3BCOztjQUptQixNQUFNOztTQU10QixlQUFHO0FBQ04sT0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0dBQ2Q7OztTQUVNLGtCQUFHO0FBQ1QsZ0RBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztBQUUzQixPQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0MsT0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsYUFBYSxDQUFDO0FBQ2hDLE9BQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFekMsT0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLCtEQUlyQixDQUFDO0dBQ0Y7OztRQXRCbUIsTUFBTTs7O3FCQUFOLE1BQU07Ozs7Ozs7Ozs7Ozs7O0lDSE4sVUFBVTtBQUNsQixVQURRLFVBQVUsQ0FDakIsU0FBUyxFQUFFO3dCQURKLFVBQVU7O0FBRTdCLE1BQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzNCLE1BQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0VBQ3BCOztjQUptQixVQUFVOztTQU12QixrQkFBRzs7QUFFVCxPQUFJLENBQUMsT0FBTyw2RUFJWCxDQUFDOztBQUVGLE9BQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQztHQUMvRDs7O1FBZm1CLFVBQVU7OztxQkFBVixVQUFVOzs7Ozs7Ozs7cUJDRVAsS0FBSzs7Ozs0QkFGVixpQkFBaUI7Ozs7QUFFckIsU0FBUyxLQUFLLEdBQUk7QUFDaEMsS0FBSSxNQUFNLEdBQUcsOEJBQVcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3hELE9BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztDQUNiIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBWaWV3IGZyb20gJy4uL3ZpZXdzL0hlYWRlclZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJDb250cm9sbGVyIHtcblx0Y29uc3RydWN0b3IgKGNvbnRhaW5lcikge1xuXHRcdHRoaXMudmlldyA9IG5ldyBWaWV3KGNvbnRhaW5lcik7XG5cblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWV3LnJlbmRlcigpO1xuXHR9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZXNDb250cm9sbGVyIHtcblx0Y29uc3RydWN0b3IgKCkge1xuXG5cdH1cbn0iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL0hlYWRlckNvbnRyb2xsZXInO1xuaW1wb3J0IE1lc3NhZ2VzIGZyb20gJy4uL2NvbnRyb2xsZXJzL01lc3NhZ2VzQ29udHJvbGxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciB7XG5cdGNvbnN0cnVjdG9yIChjb250YWluZXIpIHtcblx0XHR0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblx0XHR0aGlzLmNvbnRlbnQgPSBudWxsO1xuXHR9XG5cblx0cnVuICgpIHtcblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRuZXcgSGVhZGVyKHRoaXMuY29udGFpbmVyKTtcblxuXHRcdHRoaXMuY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRoaXMuY29udGVudC5pZCA9ICdhcHAtY29udGVudCc7XG5cdFx0dGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50KTtcblxuXHRcdHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBgXG5cdFx0XHQ8cD5cblx0XHRcdFx0SSBSIFJvdXRlciBDb250ZW50IVxuXHRcdFx0PC9wPlxuXHRcdGA7XG5cdH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJWaWV3IHtcblx0Y29uc3RydWN0b3IgKGNvbnRhaW5lcikge1xuXHRcdHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXHRcdHRoaXMuY29udGVudCA9IG51bGw7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXG5cdFx0dGhpcy5jb250ZW50ID0gYFxuXHRcdFx0PGhlYWRlciBpZD1cImhlYWRlclwiPlxuXHRcdFx0XHRJIFIgSGVhZGVyIVxuXHRcdFx0PC9oZWFkZXI+XG5cdFx0YDtcblxuXHRcdHRoaXMuY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRoaXMuY29udGVudCApO1xuXHR9XG59IiwiaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlci9yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydCAoKSB7XG5cdGxldCByb3V0ZXIgPSBuZXcgUm91dGVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cdHJvdXRlci5ydW4oKTtcbn0iXX0=

//# sourceMappingURL=all.js.map