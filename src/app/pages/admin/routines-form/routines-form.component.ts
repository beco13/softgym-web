import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Routine } from 'src/app/entities/routine';
import { RoutineExercise } from 'src/app/entities/routine-exercise';
import { RoutinesService } from 'src/app/services/routines.service';
import { UtilsService } from 'src/app/services/utils.service';



declare const swal: any;


@Component({
    selector: 'app-routines-form',
    templateUrl: './routines-form.component.html',
    styleUrls: ['./routines-form.component.scss']
})
export class RoutinesFormComponent implements OnInit {

    formData: Routine;

    constructor(
        private router: Router,
        private utilsService: UtilsService,
        private currentRoute: ActivatedRoute,
        private routinesService: RoutinesService) {
        this.formData = new Routine();
    }

    ngOnInit(): void {
        this.currentRoute.params
            .subscribe(params => {
                if (typeof params['id'] !== 'undefined') {
                    this.loadData(params['id']);
                }
            });

    }

    private loadData(_id: string) {
        this.utilsService.showLoading();
        this.routinesService
            .get(_id)
            .subscribe({
                next: (row: Routine) => {
                    this.formData = row;
                    this.utilsService.hiddenLoading();
                }, error: (error: any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }

    addItem(){
        let item = new RoutineExercise();
        this.formData.exercises.push(item);
    }

    removeItem(index: number) {
        this.formData.exercises.splice(index, 1);
    }

    save(): void {
        this.utilsService.showLoading();
        this.routinesService
            .save(this.formData)
            .subscribe({
                next: () => {
                    this.router.navigateByUrl('/admin/routines');
                    this.utilsService.hiddenLoading();
                }, error: (error: any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }

}
