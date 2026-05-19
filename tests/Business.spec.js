import { test, expect } from '@playwright/test';
import { BusinessUnit } from '../pages/BusinessUnit';

test('Create Business Unit', async ({ page }) => {

    const businessUnit = new BusinessUnit(page);

    await businessUnit.goto();

    await businessUnit.createBusinessUnit('unit121');
    await page.pause({ timeout: 3000 }); // Pause to observe the result of the business unit creation
    // // Delete Business Unit
    // await businessUnit.deleteBusinessUnit(
    //     'unit121'
    // );

    
});