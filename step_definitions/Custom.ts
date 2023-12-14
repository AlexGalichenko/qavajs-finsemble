import { Before, After, When } from '@cucumber/cucumber';
import type { BrowserContext, Page } from 'playwright';
import { IQavajsWorld } from '@qavajs/cli';
import { getValue } from '@qavajs/steps-playwright/utils';

declare global {
    var context: BrowserContext;
    var page: Page;
}
Before({ name: 'Prepare Apps'}, async function (this: IQavajsWorld) {
    await this.executeStep(`I switch to '$Toolbar' window`);
    const pages = context.pages();
    for (const page of pages) {
        if (!page.url().includes('/build/finsemble')) await page.close();
    }
});


When('I raise {string} intent for current app:', async function(intentName, contextObject) {
    const context = JSON.parse(getValue(contextObject));
    await page.evaluate(([ intentName, context ]) => {
        // @ts-ignore;
        fdc3.getInfo().then(info => {
            // @ts-ignore;
            fdc3.raiseIntent(intentName, context, info.appMetadata)
        });
    }, [ intentName, context ]);
});

After(async function (){
    const pages = context.pages();
    for (const page of pages) {
        if (!page.url().includes('/build/finsemble')) await page.close();
    }
});
