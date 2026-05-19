
export class BusinessUnit {

    constructor(page) {
        this.page = page;
        this.url = '/dashboard/institution?tab=units';

        // Locators
        this.businessUnitButton = page.getByRole('button', { name: 'Business Units' });
        this.unitNameTextbox = page.getByRole('textbox', { name: 'Unit name' });
        this.createButton = page.getByRole('button', { name: 'Create' });
        this.successMessage = page.getByText('Business unit created.');
    }
     async goto() {
        await this.page.goto(this.url);
  }

    async createBusinessUnit(unitName) {
        await this.businessUnitButton.click();
        await this.unitNameTextbox.click();
        await this.unitNameTextbox.fill(unitName);
        await this.createButton.click();
    }

    // Delete Business Unit
    async deleteBusinessUnit(unitName) {

    // Select business unit row
        await this.page.getByRole('cell', {
            name: unitName,
            exact: true
            }).click();

//     // Handle confirmation dialog
//         this.page.once('dialog', async dialog => {

//             console.log(`Dialog Message: ${dialog.message()}`);

//             await dialog.accept();
//         });

//     // Click delete button
//     await this.deleteButton.click();
// }


    }   
}