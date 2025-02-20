import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import * as styles from './login-form.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header} />
      <main className={styles.main}>
        <Card className={styles.card}>
          <CardHeader>
            <CardTitle className={styles.cardTitle}>ログイン</CardTitle>
          </CardHeader>
          <CardContent className={styles.cardContent}>
            <form>
              <div className={styles.formGroup}>
                <Label htmlFor="email">メールアドレス</Label>
                <Input 
                  id="email" 
                  type="email" 
                  className={styles.input}
                />
              </div>
              
              <div className={styles.formGroup}>
                <div className={styles.passwordHeader}>
                  <Label htmlFor="password">パスワード</Label>
                  <a href="#" className={styles.forgotPassword}>
                    パスワードを忘れた方はこちら
                  </a>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  className={styles.input}
                />
              </div>

              <div className={styles.checkboxContainer}>
                <Checkbox id="remember" />
                <label 
                  htmlFor="remember" 
                  className={styles.checkboxLabel}
                >
                  ログイン情報を保持する
                </label>
              </div>

              <Button 
                type="submit" 
                className={styles.loginButton}
              >
                ログイン
              </Button>

              <div className={styles.dividerContainer}>
                <Separator className={styles.divider} />
                <span className={styles.dividerText}>
                  そのほかの方法はこちら
                </span>
                <Separator className={styles.divider} />
              </div>

              <Button 
                variant="secondary" 
                className={styles.lineButton}
              >
                LINEでログイン
              </Button>

              <Button 
                variant="outline" 
                className={styles.googleButton}
              >
                Googleでログイン
              </Button>

              <div className={styles.signupContainer}>
                <a href="#" className={styles.signupLink}>
                  新規会員登録はこちら
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}