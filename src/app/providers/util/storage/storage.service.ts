import {Injectable} from '@angular/core';
import {environment} from '@env/environment';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() {}

    /**
     * Set token
     * @param token: Token value
     */
    setToken(token: string): void {
        localStorage.setItem(`${environment.prefix}Authorization`, token);
    }

    /**
     * Get token
     */
    getToken(): string {
        return localStorage.getItem(`${environment.prefix}Authorization`);
    }

    /**
     * Set name
     * @param name: Name value
     */
    setName(name: string): void {
        localStorage.setItem(`${environment.prefix}name`, name);
    }

    /**
     * Get name
     */
    getName(): string {
        return localStorage.getItem(`${environment.prefix}name`);
    }

    /**
     * Set lastname
     * @param lastname: Last name value
     */
    setLastname(lastname: string): void {
        localStorage.setItem(`${environment.prefix}lastname`, lastname);
    }

    /**
     *  Get lastname
     */
    getLastname(): string {
        return localStorage.getItem(`${environment.prefix}lastname`);
    }

    /**
     * Set email
     * @param email: Email value
     */
    setEmail(email: string): void {
        localStorage.setItem(`${environment.prefix}email`, email);
    }

    /**
     * Get email
     */
    getEmail(): string {
        return localStorage.getItem(`${environment.prefix}email`);
    }

    /**
     * Set charge
     * @param charge: Charge value
     */
    setCharge(charge: string): void {
        localStorage.setItem(`${environment.prefix}charge`, charge);
    }

    /**
     * Get charge
     */
    getCharge(): string {
        return localStorage.getItem(`${environment.prefix}charge`);
    }

    setVerify(verify: number): void {
        localStorage.setItem(`${environment.prefix}verify`, (verify || 0).toString());
    }

    getVerify(): number {
        return +localStorage.getItem(`${environment.prefix}verify`);
    }

    setType(type: number): void {
        localStorage.setItem(`${environment.prefix}type`, type.toString());
    }

    getType(): number {
        return +localStorage.getItem(`${environment.prefix}type`);
    }

    setKnowledge(knowledge: number): void {
        const target = knowledge || 0;
        localStorage.setItem(`${environment.prefix}knowledge`, target.toString());
    }

    getKnowledge(): number {
        return +localStorage.getItem(`${environment.prefix}knowledge`);
    }

    setKnowledgeAt(knowledgeAt: Date): void {
        const target = knowledgeAt;
        if (knowledgeAt.toString() !== 'Invalid Date') {
            localStorage.setItem(`${environment.prefix}knowledgeAt`, target.toString());
        }
    }

    getKnowledgeAt(): Date {
        const date = localStorage.getItem(`${environment.prefix}knowledgeAt`);
        return date ? new Date(localStorage.getItem(`${environment.prefix}knowledgeAt`)) : null;
    }

    setRole(roleId: number): void {
        localStorage.setItem(`${environment.prefix}role`, roleId.toString());
    }

    getRole(): number {
        return +localStorage.getItem(`${environment.prefix}role`);
    }


    setHasMatrixRecording(hasMatrixRecording: boolean): void {
        localStorage.setItem(`${environment.prefix}hasMatrixRecording`, hasMatrixRecording?.toString() || (false).toString());
    }

    getHasMatrixRecording(): boolean {
        return localStorage.getItem(`${environment.prefix}hasMatrixRecording`) === 'true';
    }

    /**
    * Clean localStorage
    */
    cleanStorage(): void {
        localStorage.clear();
    }

    setEmailAdmin(email: string): void {
        localStorage.setItem(`${environment.prefix}emailAdmin`, email);
    }

    getEmailAdmin(): string{
        return localStorage.getItem(`${environment.prefix}emailAdmin`);
    }
}
