import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PackagesServices } from './packages.component.service'

@Component({
    selector: 'app-packages',
    templateUrl: './packages.component.html',
    providers: [PackagesServices],
    styleUrls: ['./packages.component.less']
})
export class PackagesComponent implements OnInit {

    public dependencies: Array<any> = [];
    public masterTags: Array<any> = ['web', 'spring', 'database', 'starter', 'aws', 'maven'];
    public selectedPackages = new Set();
    public unselectedPackages = new Set();
    public selected: string;
    public offsetHeight = 110;
    public categoriesHeight = 150;
    public categories = {};
    public objectKeys = Object.keys;
    public selectedTags = new Set();

    constructor(private packagesServices: PackagesServices ) {}

    public isDependencySelected(event, dependency:string): void {
        if (event.target.checked){
            this.selectedPackages.add(dependency['name']);
            this.unselectedPackages.delete(dependency['name']);
            console.log(dependency);
            dependency['topic_list'].forEach((i) => {
                this.selectedTags.add(i);
            })
        } else {
            this.unselectedPackages.add(dependency['name']);
            this.selectedPackages.delete(dependency['name']);
            console.log(dependency);
            dependency['topic_list'].forEach((i) => {
                this.selectedTags.delete(i);
            })
            this.selectedPackages.forEach((i) => {
                this.dependencies.map((d) => {
                    if (d['name'] === i){
                        d['topic_list'].forEach((j) => {
                            this.selectedTags.add(j);
                        })
                    }
                })
            })
        }
        console.log(this.selectedPackages);
    }

    processPackages(): void {
        const packageInfo: Observable<any> = this.packagesServices.getPackages();
        packageInfo.subscribe((data) => {
            console.log(data);
            if (data) {
                this.dependencies = data['dependencies'];
                data['dependencies'].map((d) => {
                    this.unselectedPackages.add(d['name']);
                    d.topic_list.forEach((element) => {
                        this.categories[element] = this.categories[element] + 1 || 1;
                        this.categories['All'] = this.categories['All'] + 1 || 1;
                    });
                });
                this.categories = Object.keys(this.categories)
                    .sort((a, b) => this.categories[b] - this.categories[a])
                    .reduce((_sortedObj, key) => ({
                        ..._sortedObj,
                        [key]: this.categories[key]
                    }), {})
                this.categoriesHeight = this.offsetHeight + (20 * Object.keys(this.categories).length);
            }
        });
    }

    processMasterTags(): void {
        let masterTags: Observable<any> = this.packagesServices.getMasterTags();
        masterTags.subscribe((data) => {
            this.masterTags = this.masterTags.concat(data.tag_list.sort());
        })
    }

    public tagClick(tag: string){
        if (tag !== 'All'){
            if (this.selectedTags.has('All')){
                this.selectedTags.delete('All');
                this.selectedPackages.forEach((i) => {
                    this.unselectedPackages.add(i)
                })
                this.selectedPackages.clear();
            }
            if (!this.selectedTags.delete(tag)){
                this.selectedTags.add(tag);
                this.selectedTags.forEach((i) => {
                    this.dependencies.map((d) => {
                        if (d['topic_list'].indexOf(i) !== -1){
                            this.selectedPackages.add(d['name']);
                            this.unselectedPackages.delete(d['name']);
                        }
                    })
                })
            } else {
                this.selectedPackages.clear();
                this.selectedTags.forEach((i) => {
                    this.dependencies.map((d) => {
                        if (d['topic_list'].indexOf(i) !== -1){
                            this.selectedPackages.add(d['name']);
                            this.unselectedPackages.delete(d['name']);
                        }
                    })
                })
            }
        }else {
            if (this.selectedTags.has(tag)){
                this.selectedTags.clear();
                this.selectedPackages.clear();
                this.dependencies.map((d) => {
                    this.unselectedPackages.add(d['name']);
                })
            } else {
                this.selectedTags.clear();
                this.selectedTags.add(tag);
                this.unselectedPackages.clear();
                this.dependencies.map((d) => {
                    this.selectedPackages.add(d['name']);
                })
            }
        }
        console.log(this.selectedTags);
    }
    public changeVersion(dependency:string, ver:string):void{
        dependency['latest_version'] = ver;
    }
    public test(varible){
        console.log(varible);
    }
    ngOnInit() {
        this.processPackages()
    }

}
