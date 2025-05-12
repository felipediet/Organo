import "zone.js";
import "zone.js/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AvaliacaoEstrelasComponent } from "./avaliacao-estrelas.component";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { forwardRef } from "@angular/core";

describe('AvaliacaoEstrelasComponent', () => {	
    let component: AvaliacaoEstrelasComponent;
    let fixture: ComponentFixture<AvaliacaoEstrelasComponent>;

    // beforeAll(() => {
    //     TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    // });
    
    beforeEach(() => {
        TestBed.configureTestingModule({
        imports: [AvaliacaoEstrelasComponent],
        providers: [
            {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AvaliacaoEstrelasComponent),
            multi: true
            }
        ]
        });

        fixture = TestBed.createComponent(AvaliacaoEstrelasComponent);
        component = fixture.componentInstance;
        component.readOnly = false;
    });

    it('deveria ser criado', () => {
        expect(component).toBeTruthy();
    });

    it('deveria definir a propriedade classificacao', () => {
        expect(component.classificacao).toBeDefined();
    });

    it('deveria renderizar o conteúdo baseado na propriedade classificacao', () => {
        component.classificacao = 3;
        expect(component).toMatchSnapshot();
    });

    it('deveria renderizar o conteúdo baseado na propriedade readOnly', () => {
        component.readOnly = true;
        expect(component).toMatchSnapshot();
    });

    it('deveria renderizar o conteúdo baseado na propriedade estrelas', () => {
        expect(component).toMatchSnapshot();
    });

    it('deveria atribuir um valor para a calssificação quando o método writeValue for chamado', () => {
        component.writeValue(3);
        expect(component.classificacao).toBe(3);
    });



});