/*
 * @Description:
 * @Version: 1.0
 * @Author: shenkai03
 * @Date: 2024-05-31 12:32:00
 * @LastEditors: shenkai03
 * @LastEditTime: 2024-05-31 12:32:01
 * @FilePath: /my-app/lib/utils.ts
 * Copyright (C) 2024 shenkai03. All rights reserved.
 */
// lib/utils.ts
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
