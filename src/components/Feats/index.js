/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';

import items from '@assets/features.json';
import style from './index.module.css';

const Item = ({ title, text }) => (
	<div key={title} className={style.item}>
		<h3>{title}</h3>
		<p>{text}</p>
	</div>
);

export default () => (
	<div className={style.features}>{items.map(Item)}</div>
);
