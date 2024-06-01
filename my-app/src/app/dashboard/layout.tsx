/*
 * @Description: 
 * @Version: 1.0
 * @Author: shenkai03
 * @Date: 2024-06-01 12:18:19
 * @LastEditors: shenkai03
 * @LastEditTime: 2024-06-01 12:18:26
 * @FilePath: /my-app/src/app/dashboard/layout.tsx
 * Copyright (C) 2024 shenkai03. All rights reserved.
 */
export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
   
        {children}
      </section>
    )
  }