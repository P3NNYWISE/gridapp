/**
 * SalesLogix API
 * Allows to access SalesLogix information and reports Allows to access SalesLogix information and reports
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/Rx');
/* tslint:disable:no-unused-variable member-ordering */
'use strict';
var PoliciesApi = (function () {
    function PoliciesApi(http, basePath) {
        this.http = http;
        this.basePath = 'http://northstar.nybblenetwork.com/slx-api/v1';
        this.defaultHeaders = new http_1.Headers();
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     * Add Policy Premium
     * Add a new premium record
     * @param id
     * @param premiumId
     * @param body
     */
    PoliciesApi.prototype.addPolicyPremium = function (id, premiumId, body, extraHttpRequestParams) {
        var path = this.basePath + '/policies/{id}/premium/{premium_id}'
            .replace('{' + 'id' + '}', String(id))
            .replace('{' + 'premium_id' + '}', String(premiumId));
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling addPolicyPremium.');
        }
        // verify required parameter 'premiumId' is not null or undefined
        if (premiumId === null || premiumId === undefined) {
            throw new Error('Required parameter premiumId was null or undefined when calling addPolicyPremium.');
        }
        var requestOptions = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(body);
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Add Policy Stream
     *
     * @param id
     * @param body
     */
    PoliciesApi.prototype.addPolicyStream = function (id, body, extraHttpRequestParams) {
        var path = this.basePath + '/policies/{id}/stream'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling addPolicyStream.');
        }
        var requestOptions = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(body);
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * List Policy Products
     *
     * @param id
     */
    PoliciesApi.prototype.gETPoliciesIdProducts = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/policies/{id}/products'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling gETPoliciesIdProducts.');
        }
        var requestOptions = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Get Policy
     * This API retrieves a single policy
     * @param id
     */
    PoliciesApi.prototype.getPolicy = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/policies/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getPolicy.');
        }
        var requestOptions = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Get Policy Premium
     * Retrieve a premium record
     * @param id
     * @param premiumId
     */
    PoliciesApi.prototype.getPolicyPremium = function (id, premiumId, extraHttpRequestParams) {
        var path = this.basePath + '/policies/{id}/premium/{premium_id}'
            .replace('{' + 'id' + '}', String(id))
            .replace('{' + 'premium_id' + '}', String(premiumId));
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getPolicyPremium.');
        }
        // verify required parameter 'premiumId' is not null or undefined
        if (premiumId === null || premiumId === undefined) {
            throw new Error('Required parameter premiumId was null or undefined when calling getPolicyPremium.');
        }
        var requestOptions = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Get Policy Stream
     *
     * @param id
     * @param year
     * @param month
     */
    PoliciesApi.prototype.getPolicyStream = function (id, year, month, extraHttpRequestParams) {
        var path = this.basePath + '/policies/{id}/stream'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getPolicyStream.');
        }
        if (year !== undefined) {
            queryParameters.set('year', String(year));
        }
        if (month !== undefined) {
            queryParameters.set('month', String(month));
        }
        var requestOptions = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * List Policies
     *
     * @param premiumRequestBatchState
     * @param premiumRequestPolicyState
     */
    PoliciesApi.prototype.listPolicies = function (premiumRequestBatchState, premiumRequestPolicyState, extraHttpRequestParams) {
        var path = this.basePath + '/policies';
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        if (premiumRequestBatchState !== undefined) {
            queryParameters.set('premiumRequestBatchState', String(premiumRequestBatchState));
        }
        if (premiumRequestPolicyState !== undefined) {
            queryParameters.set('premiumRequestPolicyState', String(premiumRequestPolicyState));
        }
        var requestOptions = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * List Policy Premiums
     * Retrieve the policy&#39;s premium record/s
     * @param id
     * @param last
     */
    PoliciesApi.prototype.listPolicyPremiums = function (id, last, extraHttpRequestParams) {
        var path = this.basePath + '/policies/{id}/premiums'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling listPolicyPremiums.');
        }
        if (last !== undefined) {
            queryParameters.set('last', String(last));
        }
        var requestOptions = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Update Policy Premium
     * Update premium record
     * @param id
     * @param premiumId
     * @param body
     */
    PoliciesApi.prototype.updatePolicyPremium = function (id, premiumId, body, extraHttpRequestParams) {
        var path = this.basePath + '/policies/{id}/premium/{premium_id}'
            .replace('{' + 'id' + '}', String(id))
            .replace('{' + 'premium_id' + '}', String(premiumId));
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updatePolicyPremium.');
        }
        // verify required parameter 'premiumId' is not null or undefined
        if (premiumId === null || premiumId === undefined) {
            throw new Error('Required parameter premiumId was null or undefined when calling updatePolicyPremium.');
        }
        var requestOptions = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(body);
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Update Policy Stream
     *
     * @param id
     * @param body
     */
    PoliciesApi.prototype.updatePolicyStream = function (id, body, extraHttpRequestParams) {
        var path = this.basePath + '/policies/{id}/stream'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updatePolicyStream.');
        }
        var requestOptions = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(body);
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    PoliciesApi = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Optional()), 
        __metadata('design:paramtypes', [http_1.Http, String])
    ], PoliciesApi);
    return PoliciesApi;
}());
exports.PoliciesApi = PoliciesApi;
//# sourceMappingURL=PoliciesApi.js.map