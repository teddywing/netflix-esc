// ==UserScript==
// @name Netflix Esc
// @description Add keyboard shortcuts to Netflix
// @version 0.0.1
// @namespace com.teddywing
// @match https://www.netflix.com/*
// ==/UserScript==

// Copyright (c) 2020  Teddy Wing
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

document.addEventListener(
	'keyup',
	function(e) {
		if (e.key === 'Escape') {
			var close_button = document.querySelector(
				'[data-uia="previewModal-closebtn"] > [role="button"]'
			);

			var click = new MouseEvent(
				'click',
				{ buttons: 1, bubbles: true }
			);

			close_button.dispatchEvent(click);
		}
	}
);
