import React, { useState } from 'react';
import { Button } from "@/common/ui/button";
import { Input } from "@/common/ui/input";
import { Label } from "@/common/ui/label";
import { Checkbox } from "@/common/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/common/ui/card";
import { Separator } from "@/common/ui/separator";
import axiosInstance from '../lib/axios';
import * as styles from './SignupForm.css';

export default function SignupForm() {

    const [occupation, setOccupation] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [password_confirmation, setPasswordConfirmation] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            await axiosInstance.get('/sanctum/csrf-cookie');
            await axiosInstance.post('/api/register', {
                occupation,
                name,
                email,
                password,
                password_confirmation
            });
            window.location.href = '/';
        } catch (err) {
            setError('登録に失敗しました。入力内容を確認してください。');
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
            <CardTitle className={styles.cardTitle}>新規会員登録</CardTitle>
            </CardHeader>
            <CardContent className={styles.cardContent}>
            <form onSubmit={handleSubmit}>
                {error && <div className={styles.error}>{error}</div>}

                <div className={styles.formGroup}>
                <Label htmlFor="occupation">所属組織</Label>
                <Input 
                    id="occupation" 
                    type="text" 
                    className={styles.input}
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    required
                />
                </div>

                <div className={styles.formGroup}>
                <Label htmlFor="name">名前</Label>
                <Input 
                    id="name" 
                    type="text" 
                    className={styles.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                </div>
                
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

                <div className={styles.formGroup}>
                <div className={styles.passwordHeader}>
                    <Label htmlFor="password_confirmation">パスワード確認</Label>
                </div>
                <Input 
                    id="password_confirmation" 
                    type="password" 
                    className={styles.input}
                    value={password_confirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
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
                {isLoading ? '新規登録中...' : '新規登録'}
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