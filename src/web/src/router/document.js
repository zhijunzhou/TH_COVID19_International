/**
 * Tencent is pleased to support the open source community by making outerdata-opensouce available.
 * Copyright (C) 2019 Limited, Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import { BASE_URL } from '@/utils'
import routes, { beforeEach, scrollBehavior } from './all-routes'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    base: BASE_URL,
    routes: routes.document,
    scrollBehavior
})

router.beforeEach(beforeEach('document'))

export default router
