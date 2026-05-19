
import { expect } from '@playwright/test';
 
export class PublicationPage {

  constructor(page) {
    this.page = page;

    // URL
    this.url = '/dashboard/institution?tab=publications';

    // Buttons
    this.newPublicationBtn = page.getByRole('button', {
      name: 'New publication'
    });

    this.createPublicationBtn = page.getByRole('button', {
      name: 'Create Publication'
    });
//  await this.page.locator('button:has(svg.lucide-trash-2)')
    this.deletePublicationBtn = page.locator('button:has(svg.lucide-trash-2)').first();

    // Upload
    this.uploadInput = page.locator('input[type="file"]');

    // Form Fields
    this.titleInput = page.getByRole('textbox', {
      name: 'Title',
      exact: true
    });

    this.typeDropdown = page.getByRole('combobox').first();

    this.yearDropdown = page.getByRole('combobox').nth(1);

    this.abstractInput = page.getByRole('textbox', {
      name: 'Abstract',
      exact: true
    });

    this.keywordInput = page.getByRole('textbox', {
      name: 'Add keywords'
    });

    this.doiInput = page.getByRole('textbox', {
      name: '10.…'
    });

    this.accessionInput = page.getByRole('textbox', {
      name: 'arXiv, ISBN, …'
    });

    this.businessDropdown = page.getByRole('combobox').nth(2);

    this.eventDateInput = page.locator('input[type="date"]');
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async clickNewPublication() {
    await this.newPublicationBtn.click();
  }

  async uploadPDF(filePath) {
    await this.uploadInput.setInputFiles(filePath);
  }

  async fillPublicationForm(data) {

    await this.titleInput.fill(data.title);

    await this.typeDropdown.selectOption(data.type);

    await this.yearDropdown.selectOption(data.year);

    await this.abstractInput.fill(data.abstract);

    await this.keywordInput.fill(data.keyword);
    await this.keywordInput.press('Enter');

    await this.doiInput.fill(data.doi);

    await this.accessionInput.fill(data.accessionId);

    await this.businessDropdown.selectOption(data.businessUnit);

    await this.eventDateInput.fill(data.eventDate);
  }

  async createPublication() {
    await this.createPublicationBtn.click();
  }

   async deletePublication(title) {
  // Setup listener BEFORE the click
  this.page.once('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept();
  });

  await this.page.locator('button:has(svg.lucide-trash-2)').first().click();
  
}

  async verifyPublicationVisible(title) {
    await expect(this.page.getByText(title)).toBeVisible();
  }
}
