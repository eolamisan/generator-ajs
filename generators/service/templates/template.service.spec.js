/* eslint-disable */
import { expect, should, assert } from "chai"
import sinon from "sinon"
import chaiAsPromised from "chai-as-promised";
import sinonchai from "sinon-chai";

chai.use(sinonchai);
chai.use(chaiAsPromised);

import controller from "./<%= servicename %>.service.js";

describe("<%= servicename %> spec", function () {

    let $ctrl;

    beforeEach(function setupComponent() {

        $ctrl = new controller();

    });

    it("contoller loaded", function () {
        assert.exists(controller, "service is neither `null` nor `undefined`");
    });

    it("instance creates", function () {
        assert.exists($ctrl, "service instance is neither `null` nor `undefined`");
    });
   
});