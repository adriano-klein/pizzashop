import { expect, test } from '@playwright/test'

test('update profile successfu;;y', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.getByRole('button').nth(1).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()
  await page.getByLabel('Nome').fill('Rocket Pizza')
  await page.getByLabel('Descrição').fill('Another description')
  await page.getByRole('button', { name: 'Salvar' }).click()

  // NOTE: faz com que que a página aguarde a finalização da chamada http
  await page.waitForLoadState('networkidle')
  const toast = page.getByText('Perfil atualizado com sucesso')
  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()
  await page.waitForTimeout(250)

  await expect(page.getByRole('button', { name: 'Rocket Pizza' })).toBeVisible()
})
