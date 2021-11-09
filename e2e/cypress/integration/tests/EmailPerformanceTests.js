import {queriesMassPage} from "../../pages/QueriesMassPage";

const INDIANAPOLIS = 'Indianapolis';

describe("'Top cities by opens' should work as expected", () => {
    beforeEach(() => {
        queriesMassPage.navigateToQueriesMassPage();
    });

    it("Correct data should be displayed for 'Indianapolis' row", () => {
        queriesMassPage.assertCitiesByOpens(INDIANAPOLIS, '110', '3.7');
    })
})