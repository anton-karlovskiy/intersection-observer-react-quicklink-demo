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

/**
 * Important relevant bits from `react-router-dom` and reexport.
 * Even though we only care about `Link` and `Route` here, it's
 *   lumped together because 🌈application design.
 */

// Note: This would be a dependency
import { Link as L, Route as R, withRouter, BrowserRouter } from 'react-router-dom';

import { QLink, QRoute } from '../Quicklink';

export { BrowserRouter, withRouter };

export const Link = QLink(L);
export const Route = QRoute(R);
