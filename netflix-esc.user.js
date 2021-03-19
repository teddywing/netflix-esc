// ==UserScript==
// @name Netflix Esc
// @description Add keyboard shortcuts to Netflix
// @version 0.0.2
// @namespace com.teddywing
// @match https://www.netflix.com/*
// ==/UserScript==

// Copyright (c) 2020–2021  Teddy Wing
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
		// Close info modal with Escape.
		if (
			e.key === 'Escape'
			|| (e.ctrlKey && e.key === '[')
		) {
			info_modal_close();

			return;
		}

		// Show info modal with 'i'.
		if (e.key === 'i') {
			info_modal_open();
		}
	}
);


// Click the close button in the info modal.
function info_modal_close () {
	var close_button = document.querySelector(
		'[data-uia="previewModal-closebtn"][role="button"]'
	);

	var click = new MouseEvent(
		'click',
		{ buttons: 1, bubbles: true }
	);

	close_button.dispatchEvent(click);
}

// Click the "More info" button that appears when a tile is hovered and
// expanded.
function info_modal_open () {
	var more_info_button = document.querySelector(
		'.mini-modal-container button[data-uia="expand-to-detail-button"]'
	);

	var click = new MouseEvent(
		'click',
		{ buttons: 1, bubbles: true }
	);
	more_info_button.dispatchEvent(click);
}
