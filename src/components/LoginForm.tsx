import React, { useState } from 'react';
import { Button } from "@/common/ui/button";
import { Input } from "@/common/ui/input";
import { Label } from "@/common/ui/label";
import { Checkbox } from "@/common/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/common/ui/card";
import { Separator } from "@/common/ui/separator";
import * as styles from './LoginForm.css';
import axiosInstance from '../lib/axios';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await axiosInstance.post('api/login', {
        email,
        password
      });
      window.location.href = '/';
    } catch (err) {
      setError('メールアドレスまたはパスワードが正しくありません。');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Card className={styles.card}>
          <CardHeader>
            <CardTitle className={styles.cardTitle}>ログイン</CardTitle>
          </CardHeader>
          <CardContent className={styles.cardContent}>
            <form onSubmit={handleSubmit}>
              {error && <div className={styles.error}>{error}</div>}
              
              <div className={styles.formGroup}>
                <Label htmlFor="email">メールアドレス</Label>
                <Input 
                  id="email" 
                  type="email" 
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
                disabled={isLoading}
              >
                {isLoading ? 'ログイン中...' : 'ログイン'}
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
                <a href="/signup" className={styles.signupLink}>
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