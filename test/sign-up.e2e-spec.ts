import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu Nome').fill('Adriano Klein')
  await page.getByLabel('Seu E-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('11999999999')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()
  const toast = page.getByText('Restaurante cadastrado com sucesso')

  expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByLabel('Nome do estabelecimento').fill('Pizzaria do fulano')
  await page.getByLabel('Seu Nome').fill('Fulano')
  await page.getByLabel('Seu E-mail').fill('fulano25klein@gmail.com')
  await page.getByLabel('Seu celular').fill('11999999999')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()
  const toast = page.getByText('Erro ao cadastrar restaurante')

  expect(toast).toBeVisible()
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByRole('link', { name: 'Fazer login' }).click()
  expect(page.url()).toContain('/sign-in')
})
