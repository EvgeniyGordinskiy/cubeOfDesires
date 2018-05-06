'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _transformer = require('./../transformer');

var _transformer2 = _interopRequireDefault(_transformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* ============
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Register personal informations Transformer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ============
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The transformer for the personal information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var PersonalInfoTransformer = function (_Transformer) {
  _inherits(PersonalInfoTransformer, _Transformer);

  function PersonalInfoTransformer() {
    _classCallCheck(this, PersonalInfoTransformer);

    return _possibleConstructorReturn(this, (PersonalInfoTransformer.__proto__ || Object.getPrototypeOf(PersonalInfoTransformer)).apply(this, arguments));
  }

  _createClass(PersonalInfoTransformer, null, [{
    key: 'fetch',

    /**
     * Method used to transform a fetched personalInfo
     *
     * @param personalInfo The fetched personalInfo
     *
     * @returns {Object} The transformed personalInfo
     */
    value: function fetch(personalInfo) {
      return {
        phoneNumber: personalInfo.phone_number,
        streetName: personalInfo.street_name,
        zipcode: personalInfo.zipcode,
        cityId: personalInfo.city_id
      };
    }

    /**
     * Method used to transform a send personalInfo
     *
     * @param personalInfo The personalInfo to be send
     *
     * @returns {Object} The transformed personalInfo
     */

  }, {
    key: 'send',
    value: function send(personalInfo) {
      return {
        phone_number: personalInfo.phoneNumber,
        street_name: personalInfo.streetName,
        zipcode: personalInfo.zipcode,
        city_id: personalInfo.cityId
      };
    }
  }]);

  return PersonalInfoTransformer;
}(_transformer2.default);

exports.default = PersonalInfoTransformer;

//# sourceMappingURL=registerPersonalInfo-compiled.js.map