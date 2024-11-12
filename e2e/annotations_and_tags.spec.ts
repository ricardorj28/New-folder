import {test} from '@playwright/test'

test.skip('test one', async({page}) => { // for test that are not ready, so means to skip the test

});
test.fixme('test to be fixed', async({page}) => { // The same of skip but more organized if we have to fix something

});

test('slow test', async ({page})=> {  // to make the test slowly

});

//TAGS

test('test login page @smoke', async ({page}) =>{  // So, in the terminal, instead of --head, copy: --grep ¨@smoke¨. So will run only the test with smoke tag

})