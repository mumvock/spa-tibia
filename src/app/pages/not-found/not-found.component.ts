import { Component } from '@angular/core';

@Component({
  template: `
    <section tibiaWrapper>
        <header tibiaHeader>
            <h1 class="tibia-h1">Not found</h1>
        </header>

        <tibia-container class="tibia-body">
            <div class="text-center my-3">
                <img src="./assets/images/animated/creatures/leviathan.gif" alt="Leviathan">
                <p class="tibia-creature-quote mt-3">"CHHHRRRR"</p>
            </div>

            <p>Alas! Brave adventurer, you have met a sad fate.</p>
            Sailing in distant seas is dangerous, it seems Leviathan didn't take pity on you.
            <p class="mb-0">
                But do not despair, for the gods will bring you
                <a routerLink="/" class="tibia-anchor">back to home</a>.
            </p>
        </tibia-container>
    </section>
  `,
})
export class NotFoundComponent {}
