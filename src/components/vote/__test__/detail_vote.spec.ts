import { test, expect } from "@playwright/test";

test("vote_detail", async ({ page }) => {
  await page.goto(process.env.NEXT_PUBLIC_HOSTNAME + "/ko/vote/2");

  await page
    .getByRole("div", {
      name: "flex h-full w-full rounded-2xl border-2 shadow-md mb-2",
    })
    .click();
});
