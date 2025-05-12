import "zone.js";
import "zone.js/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
import { RodapeComponent } from "./rodape.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('RodapeComponent', () => {	
    let component: RodapeComponent;
    let fixture: ComponentFixture<RodapeComponent>;

    // beforeAll(() => {
    //     TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    // });

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RodapeComponent]
        })
        fixture = TestBed.createComponent(RodapeComponent)
        component = fixture.componentInstance;
    });

    it('deveria ser criado', () => {
        expect(component).toBeTruthy();
    });

    it('deveria definir as propriedades alt e src', () => {
        expect(component.alt).toBeDefined();
        expect(component.src).toBeDefined();
    });

    it('deveria renderizar o conteúdo baseado nas propriedades src e alt', () => {
        component.src = 'https://example.com/test-image.jpg';
        component.alt = 'Imagem teste';
        expect(component).toMatchSnapshot();
    });

    // it('should render the image with the correct src and alt attributes', () => {
    //     component.src = 'test-src';
    //     component.alt = 'test-alt';
    //     fixture.detectChanges();
        
    //     const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
    //     expect(imgElement.src).toContain('test-src');
    //     expect(imgElement.alt).toBe('test-alt');
    //   });
  
    //   it('should have an empty src and alt by default', () => {
    //     fixture.detectChanges();
        
    //     const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
    //     expect(imgElement.src).toContain('');
    //     expect(imgElement.alt).toBe('');
    //   });

    
});