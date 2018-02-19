/* eslint-disable */
import { expect, should, assert } from "chai"
import sinon from "sinon"
import chaiAsPromised from "chai-as-promised";
import sinonchai from "sinon-chai";

chai.use(sinonchai);
chai.use(chaiAsPromised);

import controller from "./<%= componentname %>.controller.js";

describe("<%= componentname %> spec", function () {

    let $ctrl;

    beforeEach(function setupComponent() {

        $ctrl = new controller();

    });

    it("contoller loaded", function () {
        assert.exists(controller, "controller is neither `null` nor `undefined`");
    });

    it("instance creates", function () {
        assert.exists($ctrl, "controller instance is neither `null` nor `undefined`");
    });
   
});