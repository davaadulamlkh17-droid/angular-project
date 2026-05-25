package mn.icode.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import mn.icode.entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    Optional<Student> findByEmail(String email);
    List<Student> findByGrade(String grade);
    List<Student> findByNameContainingIgnoreCase(String name);
    List<Student> findByAgeGreaterThan(Integer age);
    boolean existsByEmail(String email);
    long countByGrade(String grade);
}
