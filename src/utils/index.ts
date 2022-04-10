export function formatAccount(account: string) {
   return account.slice(0, 4) + "..." + account.slice(account.length - 4);
}
