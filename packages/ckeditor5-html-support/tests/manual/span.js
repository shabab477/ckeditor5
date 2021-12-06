/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals console:false, window, document */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
import Link from '@ckeditor/ckeditor5-link/src/link';

import GeneralHtmlSupport from '../../src/generalhtmlsupport';

ClassicEditor.create( document.querySelector( '#editor' ), {
	plugins: [
		Bold,
		Essentials,
		Heading,
		Italic,
		Paragraph,
		Strikethrough,
		Underline,
		GeneralHtmlSupport,
		Image,
		ImageCaption,
		SourceEditing,
		Link
	],
	toolbar: [
		'sourceEditing',
		'bold',
		'link',
		'italic',
		'underline',
		'strikethrough'
	],
	htmlSupport: {
		allow: [
			{
				name: /.*/,
				attributes: true,
				classes: true,
				styles: true
			}
		]
	}
} ).then( editor => { window.editor = editor; } ).catch( err => console.error( err.stack ) );
