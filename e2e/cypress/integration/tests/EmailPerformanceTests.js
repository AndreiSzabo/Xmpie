import {queriesMassPage} from "../../pages/QueriesMassPage";
import {commonMethods} from "../../common/commonMethods";

describe("'Top cities by opens' should work as expected", () => {
    beforeEach(() => {
        queriesMassPage.navigateToQueriesMassPage();
    });

    it("Correct data should be displayed for 'Indianapolis' row", () => {
        queriesMassPage.assertIndianapolisRowContainsExpectedData();
    })
})