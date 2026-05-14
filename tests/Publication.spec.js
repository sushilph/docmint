// tests/Publication.spec.js

import { test } from '@playwright/test';
import { PublicationPage } from '../pages/PublicationPage';

test('Create Publication', async ({ page }) => {

  const publicationPage = new PublicationPage(page);

  await publicationPage.goto();

  await publicationPage.clickNewPublication();

  await publicationPage.uploadPDF('test-data/pdf.pdf');

  await publicationPage.fillPublicationForm({
    title: 'Proposal TitleSix',
    type: 'PROPOSAL',
    year: '2026',
    abstract: 'Abstract one',
    keyword: 'add key',
    doi: '',
    accessionId: '10110',
    businessUnit: '8dc418a5997843538059874dfcc0b8bd',
    eventDate: '2027-02-02'
  });

  await publicationPage.createPublication();

  // await publicationPage.verifyPublicationVisible('Proposal TitleSix');

  await publicationPage.deletePublication();

  
});