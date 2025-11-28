import { SafeVersion } from "@fluidkey/stealth-account-kit/lib/predictStealthSafeAddressTypes";

export type Address = `0x${string}`;
export type SupportedChainId = 1 | 10 | 137 | 42_161 | 8453 | 100 | 11_155_111;

export type FluidKeyMetaStealthKeyPair = {
  spendingPrivateKey: Address;
  viewingPrivateKey: Address;
};

export type FluidKeyStealthSafeAddressGenerationParams = {
  chainId: number;
  startNonce: number;
  endNonce: number;
  safeVersion: SafeVersion;
  useDefaultAddress: boolean;
  exportPrivateKeys?: boolean;
  customTransport?: string | undefined;
  initializerTo?: Address | undefined;
  initializerData?: Address | undefined;
};

export type CreateCSVEntryParams = {
  nonce: number;
  stealthAddresses: Address[];
  settings: FluidKeyStealthSafeAddressGenerationParams;
  activeChainId: SupportedChainId;
  meta: {
    ephemeralPrivateKey: Address;
    spendingPrivateKey: Address;
    spendingPublicKey: Address;
  };
};

export type StealthAddressBalances = {
  ETH: string;
  USDT: string;
  USDC: string;
  DAI: string;
};

export type RecoveredStealthSafeRow = {
  nonce: number;
  stealthSafeAddress: string;
  stealthSignerAddress: string;
  stealthSignerKey: string;
  stealthAddresses: Address[];
  balances: StealthAddressBalances;
  status: string;
  chainId: number;
  deploymentChainId: SupportedChainId;
  safeVersion: SafeVersion;
  useDefaultAddress: boolean;
  initializerTo?: Address;
  initializerData?: Address;
  threshold: number;
};

export type StealthResults = {
  csv: string[][];
  rows: RecoveredStealthSafeRow[];
};
