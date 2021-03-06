import angular from 'angular';

import bindHtml from '../../bind-html';

import './_dropdown-select.scss';
import template from './dropdown-select.tpl.html';
import DropdownSelectCtrl from './DropdownSelectCtrl';

const dropdownSelectDDO = {
	restrict: 'E',
	require: 'ccDropdown',
	template,
	controller: DropdownSelectCtrl,
	controllerAs: '$ctrl',
	scope: {
		model: '=?',
		mapping: '<?',
		datalist: '<',
		searchable: '<?',
		disabled: '<?',
		placeholder: '@?'
	},
	bindToController: true
};

export default angular
	.module('ccms.components.dropdownSelect', [bindHtml])
	.directive('ccDropdownSelect', () => dropdownSelectDDO)
	.deprecatedDirective('dropdownSelect', () => dropdownSelectDDO)
	.name;

